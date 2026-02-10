import { ElectronAPI } from '@electron-toolkit/preload'

export type ThreatLevel = 'critical' | 'high' | 'medium' | 'low'

export interface LogEntryInput {
  id: string
  timestamp: number
  ip?: string
  method?: string
  path?: string
  statusCode?: number
  responseSize?: number
  userAgent?: string
  referer?: string
  threatLevel?: ThreatLevel
  threats?: string[]
  raw?: string
}

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

export interface IPGeoServiceStatus {
  initialized: boolean
  cacheSize: number
  cityDbLoaded: boolean
  countryDbLoaded: boolean
  asnDbLoaded: boolean
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      ipGeo: {
        getLocation: (ip: string) => Promise<IPLocationInfo>
        batchGetLocations: (ips: string[]) => Promise<[string, IPLocationInfo][]>
        getStatus: () => Promise<IPGeoServiceStatus>
        clearCache: () => Promise<void>
        reinitialize: () => Promise<void>
      }
    }
  }
}
