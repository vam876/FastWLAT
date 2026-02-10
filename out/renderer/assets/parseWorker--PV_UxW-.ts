import type { LogEntry, LogFormat } from '../types'
import { ThreatLevel } from '../types'
import { threatDetectionEngine, type LogContext } from './threatDetectionEngine'

// Worker 消息类型
interface WorkerMessage {
  id: string
  chunk: string
  startLine: number
  format: LogFormat
}

interface WorkerResponse {
  id: string
  success: boolean
  result?: {
    entries: LogEntry[]
    errors: string[]
    processedLines: number
  }
  error?: string
}

// Worker 主体
self.onmessage = function(e: MessageEvent) {
  const { id, chunk, startLine, format } = e.data
  
  try {
    const result = parseChunk(chunk, startLine, format)
    // 直接返回解析结果，保持与 workerManager 期望的格式一致
    self.postMessage({
      entries: result.entries,
      errors: result.errors,
      processedLines: result.processedLines
    })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    self.postMessage({
      error: errorMessage 
    })
  }
}

function parseChunk(content: string, startLine: number, format: LogFormat) {
  const lines = content.split('\n').filter(line => line.trim())
  const entries: LogEntry[] = []
  const errors: string[] = []
  
  // 🚀 智能检测策略：根据数据量决定检测模式
  const detectionStrategy = threatDetectionEngine.getDetectionStrategy(lines.length)
  
  lines.forEach((line, index) => {
    try {
      const entry = parseLine(line, startLine + index, format)
      // 🚀 应用智能检测策略
      if (entry && detectionStrategy.skipImportDetection) {
        entry.threatLevel = ThreatLevel.NORMAL
        entry.threats = []
      }
      if (entry) {
        entries.push(entry)
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error)
      errors.push(`Line ${startLine + index}: ${errorMessage}`)
    }
  })
  
  return { entries, errors, processedLines: lines.length }
}

function parseLine(line: string, lineNumber: number, format: LogFormat): LogEntry | null {
  if (!line.trim()) return null
  
  switch (format) {
    case 'apache':
      return parseApacheLine(line, lineNumber)
    case 'nginx':
      return parseNginxLine(line, lineNumber)
    case 'iis':
      return parseIISLine(line, lineNumber)
    case 'tomcat':
      return parseTomcatLine(line, lineNumber)
    default:
      return parseGenericLine(line, lineNumber)
  }
}

function parseApacheLine(line: string, lineNumber: number): LogEntry | null {
  // Apache Common Log Format: IP - - [timestamp] "method path version" status size
  const apacheRegex = /^(\S+) \S+ \S+ \[([^\]]+)\] "(\S+) (\S+)[^"]*" (\d+) (\S+)(?:\s+"([^"]*)")?(?:\s+"([^"]*)")?/
  const match = line.match(apacheRegex)
  
  if (!match) return parseGenericLine(line, lineNumber)
  
  const [, ip, timestamp, method, rawPath, statusCode, size, referer, userAgent] = match
  
  // URL解码处理特殊字符 - 修复编码问题
  let path = rawPath || '/'
  try {
    if (/%[0-9A-Fa-f]{2}/.test(path)) {
      // 仅在存在合法百分号编码时尝试解码，额外验证末尾不是不完整编码
      if (!path.endsWith('%') && !path.match(/%[0-9A-Fa-f]?$/)) {
      path = decodeURIComponent(path)
      }
    }
  } catch (error) {
    // 静默处理URL解码错误 - 这通常是攻击请求中的恶意编码
    // 只在开发模式下显示详细信息
    if (process.env.NODE_ENV === 'development') {
      console.warn('[ParseWorker] URL decode failed for Apache path:', path.substring(0, 100) + '...', 'URIError (malformed URL)')
    }
    // 保持原始路径，这些通常是攻击日志，保留原始数据很重要
  }
  
  return {
    id: `apache-${lineNumber}-${Date.now()}`,
    timestamp: parseTimestamp(timestamp),
    ip: ip || 'unknown',
    method: method || 'GET',
    path: path,
    statusCode: parseInt(statusCode) || 200,
    responseSize: size === '-' ? 0 : parseInt(size) || 0,
    userAgent: userAgent || 'unknown',
    referer: referer || '',
    threatLevel: detectThreatLevel(line) || ThreatLevel.NORMAL,
    threats: detectThreats(line),
    raw: line
  }
}

function parseNginxLine(line: string, lineNumber: number): LogEntry | null {
  // Nginx default format: IP - user [timestamp] "method path version" status size "referer" "user-agent"
  const nginxRegex = /^(\S+) - (\S+) \[([^\]]+)\] "(\S+) (\S+)[^"]*" (\d+) (\S+) "([^"]*)" "([^"]*)"/
  const match = line.match(nginxRegex)
  
  if (!match) return parseGenericLine(line, lineNumber)
  
  const [, ip, user, timestamp, method, rawPath, statusCode, size, referer, userAgent] = match
  
  // URL解码处理特殊字符 - 修复编码问题
  let path = rawPath || '/'
  try {
    if (/%[0-9A-Fa-f]{2}/.test(path)) {
      // 额外验证末尾不是不完整编码
      if (!path.endsWith('%') && !path.match(/%[0-9A-Fa-f]?$/)) {
      path = decodeURIComponent(path)
      }
    }
  } catch (error) {
    // 静默处理URL解码错误 - 这通常是攻击请求中的恶意编码
    if (process.env.NODE_ENV === 'development') {
      console.warn('[ParseWorker] URL decode failed for Nginx path:', path.substring(0, 100) + '...', 'URIError (malformed URL)')
    }
    // 保持原始路径，这些通常是攻击日志，保留原始数据很重要
  }
  
  return {
    id: `nginx-${lineNumber}-${Date.now()}`,
    timestamp: parseTimestamp(timestamp),
    ip: ip || 'unknown',
    method: method || 'GET',
    path: path,
    statusCode: parseInt(statusCode) || 200,
    responseSize: size === '-' ? 0 : parseInt(size) || 0,
    userAgent: userAgent || 'unknown',
    referer: referer || '',
    remoteUser: user !== '-' ? user : undefined,
    threatLevel: detectThreatLevel(line) || ThreatLevel.NORMAL,
    threats: detectThreats(line),
    raw: line
  }
}

function parseIISLine(line: string, lineNumber: number): LogEntry | null {
  // Skip IIS metadata lines (start with #)
  if (line.trim().startsWith('#')) {
    return null
  }
  
  // IIS W3C format: date time s-ip cs-method cs-uri-stem cs-uri-query s-port cs-username c-ip cs-User-Agent sc-status
  const parts = line.split(' ')
  
  if (parts.length < 10) return parseGenericLine(line, lineNumber)
  
  const [date, time, serverIp, method, basePath, query, port, user, clientIp, userAgent, ...rest] = parts
  const statusCode = rest.find(part => /^\d{3}$/.test(part)) || '200'
  
  // 组合完整路径（包含查询参数）- 修复IIS路径截断问题
  let fullPath = basePath + (query && query !== '-' ? `?${query}` : '')
  
  // URL解码处理特殊字符 - 修复编码问题
  try {
    if (/%[0-9A-Fa-f]{2}/.test(fullPath)) {
      // 额外验证末尾不是不完整编码
      if (!fullPath.endsWith('%') && !fullPath.match(/%[0-9A-Fa-f]?$/)) {
      fullPath = decodeURIComponent(fullPath)
      }
    }
  } catch (error) {
    // 静默处理URL解码错误 - 这通常是攻击请求中的恶意编码
    if (process.env.NODE_ENV === 'development') {
      console.warn('[ParseWorker] URL decode failed for IIS path:', fullPath.substring(0, 100) + '...', 'URIError (malformed URL)')
    }
    // 保持原始路径，这些通常是攻击日志，保留原始数据很重要
  }
  
  return {
    id: `iis-${lineNumber}-${Date.now()}`,
    timestamp: parseTimestamp(`${date} ${time}`),
    ip: clientIp || 'unknown',
    method: method || 'GET',
    path: fullPath || '/',
    statusCode: parseInt(statusCode) || 200,
    responseSize: 0, // IIS 로그에서 크기 추출은 복잡
    userAgent: userAgent || 'unknown',
    referer: '',
    queryString: query !== '-' ? query : undefined,
    remoteUser: user !== '-' ? user : undefined,
    threatLevel: detectThreatLevel(line) || ThreatLevel.NORMAL,
    threats: detectThreats(line),
    raw: line
  }
}

function parseTomcatLine(line: string, lineNumber: number): LogEntry | null {
  // Tomcat는 보통 Apache 형식과 유사
  return parseApacheLine(line, lineNumber)
}

function parseGenericLine(line: string, lineNumber: number): LogEntry | null {
  // 통用 해석
  const parts = line.split(' ')
  
  if (parts.length < 3) return null
  
  // IP 추출
  const ipMatch = line.match(/\b\d+\.\d+\.\d+\.\d+\b/)
  const ip = ipMatch ? ipMatch[0] : 'unknown'
  
  // HTTP 메소드 추출
  const methodMatch = line.match(/"([A-Z]+)\s/)
  const method = methodMatch ? methodMatch[1] : 'GET'
  
  // 完整路径（包含参数）提取 - 修复路径截断问题
  const fullPathMatch = line.match(/"[A-Z]+\s+([^\s"]+)/)
  let fullPath = fullPathMatch ? fullPathMatch[1] : '/'
  
  // URL解码处理特殊字符 - 修复编码问题
  try {
    // 仅在匹配合法百分号编码时解码，避免抛错
    if (/%[0-9A-Fa-f]{2}/.test(fullPath)) {
      // 额外验证末尾不是不完整编码
      if (!fullPath.endsWith('%') && !fullPath.match(/%[0-9A-Fa-f]?$/)) {
      fullPath = decodeURIComponent(fullPath)
      }
    }
  } catch (error) {
    // 静默处理URL解码错误 - 这通常是攻击请求中的恶意编码
    if (process.env.NODE_ENV === 'development') {
      console.warn('[ParseWorker] URL decode failed for Generic path:', fullPath.substring(0, 100) + '...', 'URIError (malformed URL)')
    }
    // 保持原始路径，这些通常是攻击日志，保留原始数据很重要
  }
  
  // 使用完整路径（包含查询参数）
  const path = fullPath
  
  // 分离查询字符串用于独立字段
  const queryString = fullPath.includes('?') ? fullPath.split('?', 2)[1] : undefined
  
  // 상태 코드 추출
  const statusMatch = line.match(/"\s+(\d{3})\s+/)
  const statusCode = statusMatch ? parseInt(statusMatch[1]) : 200
  
  // 응답 크기 추출
  const sizeMatch = line.match(/\b(\d+)\b/)
  const responseSize = sizeMatch ? parseInt(sizeMatch[1]) : 0
  
  // User-Agent 추출
  const uaMatch = line.match(/"([^"]*)"(?:\s*$|(?=\s+\[))/)
  const userAgent = uaMatch ? uaMatch[1] : 'unknown'
  
  return {
    id: `generic-${lineNumber}-${Date.now()}`,
    timestamp: new Date(),
    ip,
    method,
    path,
    statusCode,
    responseSize,
    userAgent,
    referer: '',
    queryString,
    threatLevel: detectThreatLevel(line) || ThreatLevel.NORMAL,
    threats: detectThreats(line),
    raw: line
  }
}

function parseTimestamp(timestampStr: string): Date {
  // 处理各种时间戳格式
  try {
    // Apache/Nginx: [dd/MMM/yyyy:HH:mm:ss +0000] 或 dd/MMM/yyyy:HH:mm:ss +0000
    if (timestampStr.includes('/') && timestampStr.includes(':')) {
      const cleaned = timestampStr.replace(/[\[\]]/g, '').trim()
      
      // 标准 Apache 格式: 10/Aug/2024:13:04:53 +0800
      const apacheMatch = cleaned.match(/(\d{1,2})\/(\w{3})\/(\d{4}):(\d{2}):(\d{2}):(\d{2})\s*([+-]\d{4})?/)
      if (apacheMatch) {
        const [, day, month, year, hour, minute, second, timezone] = apacheMatch
        
        // 月份映射
        const monthMap: Record<string, number> = {
          'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3,
          'May': 4, 'Jun': 5, 'Jul': 6, 'Aug': 7,
          'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
        }
        
        const monthNum = monthMap[month] ?? 0
        
        // ✅ 保存原始时间，不做时区转换
        // 使用本地时间构造，保持日志中记录的原始时间
        return new Date(
          parseInt(year, 10),
          monthNum,
          parseInt(day, 10),
          parseInt(hour, 10),
          parseInt(minute, 10),
          parseInt(second, 10)
        )
      }
    }
    
    // IIS: yyyy-mm-dd HH:mm:ss
    if (/^\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}/.test(timestampStr)) {
      return new Date(timestampStr.replace(' ', 'T') + 'Z')
    }
    
    // Unix timestamp (10 digits)
    if (/^\d{10}$/.test(timestampStr)) {
      return new Date(parseInt(timestampStr) * 1000)
    }
    
    // Unix timestamp (13 digits - milliseconds)
    if (/^\d{13}$/.test(timestampStr)) {
      return new Date(parseInt(timestampStr))
    }
    
    // ISO 8601 格式
    if (timestampStr.includes('T') || timestampStr.includes('Z')) {
    return new Date(timestampStr)
    }
    
    // 最后尝试默认解析
    const parsed = new Date(timestampStr)
    if (!isNaN(parsed.getTime())) {
      return parsed
    }
    
    // 如果所有方法都失败，返回当前时间
    console.warn(`[parseTimestamp] Failed to parse timestamp: "${timestampStr}", using current time`)
    return new Date()
  } catch (error) {
    console.warn(`[parseTimestamp] Error parsing timestamp: "${timestampStr}"`, error)
    return new Date()
  }
}

function detectThreatLevel(line: string): ThreatLevel | null {
  const logContext = parseLogContext(line)
  const result = threatDetectionEngine.detectThreats(logContext)
  return result.threatLevel === ThreatLevel.NORMAL ? null : result.threatLevel
}

// 从日志行中提取URI部分
function extractUriFromLine(line: string): string {
  // Apache/Nginx格式: "GET /path HTTP/1.1"
  const commonMatch = line.match(/"[A-Z]+\s+([^\s"]+)/)
  if (commonMatch) return commonMatch[1].toLowerCase()
  
  // IIS格式
  const parts = line.split(' ')
  if (parts.length >= 5) {
    const pathIndex = parts.findIndex(part => part.startsWith('/'))
    if (pathIndex > 0) return parts[pathIndex].toLowerCase()
  }
  
  return ''
}

function detectThreats(line: string): string[] {
  const logContext = parseLogContext(line)
  const result = threatDetectionEngine.detectThreats(logContext)
  return result.threats
}

function parseLogContext(line: string): LogContext {
  const uri = extractUriFromLine(line)
  const statusMatch = line.match(/\s(\d{3})\s/)
  const statusCode = statusMatch ? parseInt(statusMatch[1]) : 200
  
  // 提取User-Agent
  const userAgentMatch = line.match(/"([^"]*)"[^"]*$/)
  const userAgent = userAgentMatch ? userAgentMatch[1] : ''
  
  // 提取IP地址
  const ipMatch = line.match(/^(\d+\.\d+\.\d+\.\d+)/)
  const ip = ipMatch ? ipMatch[1] : '0.0.0.0'
  
  // 提取HTTP方法
  const methodMatch = line.match(/"([A-Z]+)\s/)
  const method = methodMatch ? methodMatch[1] : 'GET'
  
  // 提取Referer
  const refererMatch = line.match(/"([^"]*)"[^"]*"[^"]*"[^"]*$/)
  const referer = refererMatch ? refererMatch[1] : undefined

  return {
    raw: line,
    uri,
    method,
    statusCode,
    userAgent,
    ip,
    referer
  }
} 