import * as maxmind from 'maxmind'
import { existsSync } from 'fs'
import { join } from 'path'
import { app } from 'electron'

export interface IPLocationInfo {
  ip: string
  country?: string
  countryCode?: string
  region?: string
  city?: string
  latitude?: number
  longitude?: number
  timezone?: string
  isp?: string
  organization?: string
  asn?: number
  accuracy?: number
  isPrivate?: boolean
  isValid?: boolean
}

export class IPGeoLocationService {
  private cityReader: maxmind.Reader<maxmind.CityResponse> | null = null
  private countryReader: maxmind.Reader<maxmind.CountryResponse> | null = null
  private asnReader: maxmind.Reader<maxmind.AsnResponse> | null = null
  private isInitialized = false
  private cache = new Map<string, IPLocationInfo>()
  private readonly CACHE_SIZE_LIMIT = 50000
  private readonly CACHE_CLEANUP_THRESHOLD = 45000

  constructor() {
    this.initializeDatabase()
  }

  private async initializeDatabase(): Promise<void> {
    try {
      console.log('[IPGeoLocationService] Initializing MaxMind database...')
      
      const possiblePaths = [
        join(process.cwd(), 'data'),
        join(process.cwd(), 'public/data'),
        join(process.resourcesPath, 'data'),
        join(process.resourcesPath, 'app.asar.unpacked', 'data'),
        join(process.resourcesPath, 'app', 'data'),
        join(app.getAppPath(), 'data'),
        join(app.getAppPath(), 'public/data'),
        join(app.getAppPath(), '..', 'data'),
        join(__dirname, '../../data'),
        join(__dirname, '../../../data'),
        join(__dirname, '../../../../data'),
        join(app.getPath('userData'), 'data'),
        join(app.getPath('exe'), '..', 'data'),
        join(process.execPath, '..', 'data'),
        join(process.execPath, '..', 'resources', 'data')
      ]

      let dataPath: string | null = null
      
      for (const path of possiblePaths) {
        if (existsSync(path)) {
          dataPath = path
          console.log(`[IPGeoLocationService] Found data directory: ${path}`)
          break
        }
      }

      if (!dataPath) {
        console.error('[IPGeoLocationService] Data directory not found')
        return
      }

      const cityDbPath = join(dataPath, 'GeoLite2-City.mmdb')
      if (existsSync(cityDbPath)) {
        this.cityReader = await maxmind.open(cityDbPath)
        console.log('[IPGeoLocationService] City database loaded')
      }

      const countryDbPath = join(dataPath, 'GeoLite2-Country.mmdb')
      if (existsSync(countryDbPath)) {
        this.countryReader = await maxmind.open(countryDbPath)
        console.log('[IPGeoLocationService] Country database loaded')
      }

      const asnDbPath = join(dataPath, 'GeoLite2-ASN.mmdb')
      if (existsSync(asnDbPath)) {
        this.asnReader = await maxmind.open(asnDbPath)
        console.log('[IPGeoLocationService] ASN database loaded')
      }

      if (this.cityReader || this.countryReader) {
        this.isInitialized = true
        console.log('[IPGeoLocationService] Initialization complete')
      } else {
        console.error('[IPGeoLocationService] No database files loaded')
      }

    } catch (error) {
      console.error('[IPGeoLocationService] Initialization failed:', error)
      this.isInitialized = false
    }
  }

  public async getIPLocation(ip: string): Promise<IPLocationInfo> {
    if (this.cache.has(ip)) {
      return this.cache.get(ip)!
    }

    const location = await this.queryLocation(ip)
    this.cacheLocation(ip, location)
    
    return location
  }

  private async queryLocation(ip: string): Promise<IPLocationInfo> {
    const result: IPLocationInfo = {
      ip,
      isValid: this.isValidIP(ip),
      isPrivate: this.isPrivateIP(ip)
    }

    if (!result.isValid || result.isPrivate) {
      return {
        ...result,
        country: 'Local/Private',
        countryCode: 'LOCAL',
        city: 'Local',
        latitude: 0,
        longitude: 0
      }
    }

    if (!this.isInitialized) {
      return this.getDefaultLocation(ip)
    }

    try {
      const locationData = await this.performQueries(ip)
      return this.mergeLocationData(ip, locationData)
    } catch (error) {
      console.error(`[IPGeoLocationService] Query failed for ${ip}:`, error)
      return this.getDefaultLocation(ip)
    }
  }

  private async performQueries(ip: string): Promise<{
    cityData?: maxmind.CityResponse | null
    countryData?: maxmind.CountryResponse | null
    asnData?: maxmind.AsnResponse | null
  }> {
    const results: any = {}

    if (this.cityReader) {
      try {
        results.cityData = this.cityReader.get(ip)
        if (results.cityData) return results
      } catch (error) {
        console.warn(`[IPGeoLocationService] City query failed for ${ip}`)
      }
    }

    if (this.countryReader && !results.cityData) {
      try {
        results.countryData = this.countryReader.get(ip)
      } catch (error) {
        console.warn(`[IPGeoLocationService] Country query failed for ${ip}`)
      }
    }

    if (this.asnReader && (results.cityData || results.countryData)) {
      try {
        results.asnData = this.asnReader.get(ip)
      } catch (error) {}
    }

    return results
  }

  private mergeLocationData(ip: string, data: {
    cityData?: maxmind.CityResponse | null
    countryData?: maxmind.CountryResponse | null
    asnData?: maxmind.AsnResponse | null
  }): IPLocationInfo {
    const result: IPLocationInfo = {
      ip,
      isValid: this.isValidIP(ip),
      isPrivate: this.isPrivateIP(ip)
    }

    const primaryData = data.cityData || data.countryData
    const countryInfo = data.cityData?.country || data.countryData?.country

    if (primaryData && countryInfo) {
      result.country = countryInfo.names?.['zh-CN'] || countryInfo.names?.en || 'Unknown'
      result.countryCode = countryInfo.iso_code || 'UNKNOWN'
      
      if (data.cityData?.subdivisions && data.cityData.subdivisions.length > 0) {
        const subdivision = data.cityData.subdivisions[0]
        result.region = subdivision.names?.['zh-CN'] || subdivision.names?.en
      }
      
      result.region = result.region || 'Unknown Region'
      
      if (data.cityData?.city?.names) {
        result.city = data.cityData.city.names['zh-CN'] || data.cityData.city.names.en
      }
      
      result.city = result.city || 'Unknown City'
      
      if (data.cityData?.location) {
        result.latitude = data.cityData.location.latitude
        result.longitude = data.cityData.location.longitude
        result.timezone = data.cityData.location.time_zone
        result.accuracy = data.cityData.location.accuracy_radius
      } else {
        const coords = this.getCountryDefaultCoordinates(result.country)
        result.latitude = coords.latitude
        result.longitude = coords.longitude
      }
    }

    if (data.asnData) {
      result.asn = data.asnData.autonomous_system_number
      result.organization = data.asnData.autonomous_system_organization
      result.isp = data.asnData.autonomous_system_organization
    }

    if (!result.country || result.country === 'Unknown') {
      return this.getDefaultLocation(ip)
    }

    return result
  }

  private getCountryDefaultCoordinates(country: string): { latitude: number; longitude: number } {
    const coordinates: Record<string, { latitude: number; longitude: number }> = {
      '中国': { latitude: 39.9042, longitude: 116.4074 },
      '美国': { latitude: 39.8283, longitude: -98.5795 },
      '日本': { latitude: 36.2048, longitude: 138.2529 },
      '韩国': { latitude: 35.9078, longitude: 127.7669 },
      '德国': { latitude: 51.1657, longitude: 10.4515 },
      '英国': { latitude: 55.3781, longitude: -3.4360 },
      '法国': { latitude: 46.2276, longitude: 2.2137 },
      '俄罗斯': { latitude: 61.5240, longitude: 105.3188 },
      '印度': { latitude: 20.5937, longitude: 78.9629 },
      '巴西': { latitude: -14.2350, longitude: -51.9253 },
      '加拿大': { latitude: 56.1304, longitude: -106.3468 },
      '澳大利亚': { latitude: -25.2744, longitude: 133.7751 }
    }
    
    return coordinates[country] || { latitude: 0, longitude: 0 }
  }

  private getDefaultLocation(ip: string): IPLocationInfo {
    return {
      ip,
      country: 'Unknown',
      countryCode: 'UNKNOWN',
      region: 'Unknown',
      city: 'Unknown',
      latitude: 0,
      longitude: 0,
      isValid: this.isValidIP(ip),
      isPrivate: this.isPrivateIP(ip),
      timezone: undefined,
      accuracy: 0
    }
  }

  private isValidIP(ip: string): boolean {
    const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/
    const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/
    return ipv4Regex.test(ip) || ipv6Regex.test(ip)
  }

  private isPrivateIP(ip: string): boolean {
    if (!this.isValidIP(ip)) return true
    
    const parts = ip.split('.').map(Number)
    if (parts.length !== 4) return false
    
    return (
      parts[0] === 10 ||
      (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) ||
      (parts[0] === 192 && parts[1] === 168) ||
      parts[0] === 127 ||
      parts[0] === 0 ||
      parts[0] >= 224
    )
  }

  private cacheLocation(ip: string, location: IPLocationInfo): void {
    if (this.cache.size >= this.CACHE_SIZE_LIMIT) {
      const keysToDelete = Array.from(this.cache.keys())
        .slice(0, this.cache.size - this.CACHE_CLEANUP_THRESHOLD)
      keysToDelete.forEach(key => this.cache.delete(key))
    }

    this.cache.set(ip, location)
  }

  public getServiceStatus(): {
    initialized: boolean
    cacheSize: number
    cityDbLoaded: boolean
    countryDbLoaded: boolean
    asnDbLoaded: boolean
  } {
    return {
      initialized: this.isInitialized,
      cacheSize: this.cache.size,
      cityDbLoaded: !!this.cityReader,
      countryDbLoaded: !!this.countryReader,
      asnDbLoaded: !!this.asnReader
    }
  }

  public clearCache(): void {
    this.cache.clear()
    console.log('[IPGeoLocationService] Cache cleared')
  }

  public async reinitialize(): Promise<void> {
    console.log('[IPGeoLocationService] Reinitializing...')
    this.isInitialized = false
    this.clearCache()
    await this.initializeDatabase()
  }

  public async batchGetIPLocations(ips: string[]): Promise<Map<string, IPLocationInfo>> {
    const results = new Map<string, IPLocationInfo>()
    const uncachedIPs: string[] = []

    for (const ip of ips) {
      if (this.cache.has(ip)) {
        results.set(ip, this.cache.get(ip)!)
      } else {
        uncachedIPs.push(ip)
      }
    }

    const batchPromises = uncachedIPs.map(async (ip) => {
      const location = await this.queryLocation(ip)
      this.cacheLocation(ip, location)
      return { ip, location }
    })

    const batchResults = await Promise.all(batchPromises)
    batchResults.forEach(({ ip, location }) => {
      results.set(ip, location)
    })

    return results
  }
}

export const ipGeoLocationService = new IPGeoLocationService()
