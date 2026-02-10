# API 文档

FastWLAT 主进程 API 接口说明

## IPC 通信接口

### IP 地理位置服务

#### getLocation

查询单个 IP 的地理位置信息。

**调用方式**:
```typescript
const result = await window.api.ipGeo.getLocation(ip)
```

**参数**:
- `ip` (string): IP 地址

**返回值**:
```typescript
interface IPLocationInfo {
  ip: string              // IP 地址
  country?: string        // 国家名称
  countryCode?: string    // 国家代码
  region?: string         // 省份/地区
  city?: string          // 城市
  latitude?: number      // 纬度
  longitude?: number     // 经度
  timezone?: string      // 时区
  isp?: string          // ISP 提供商
  organization?: string  // 组织
  asn?: number          // ASN 编号
  accuracy?: number     // 精度（米）
  isPrivate?: boolean   // 是否私有 IP
  isValid?: boolean     // 是否有效 IP
}
```

**示例**:
```typescript
const location = await window.api.ipGeo.getLocation('8.8.8.8')
console.log(location)
// {
//   ip: '8.8.8.8',
//   country: 'United States',
//   countryCode: 'US',
//   city: 'Mountain View',
//   latitude: 37.386,
//   longitude: -122.0838,
//   ...
// }
```

#### batchGetLocations

批量查询多个 IP 的地理位置信息。

**调用方式**:
```typescript
const results = await window.api.ipGeo.batchGetLocations(ips)
```

**参数**:
- `ips` (string[]): IP 地址数组

**返回值**:
```typescript
Array<[string, IPLocationInfo]>
```

**示例**:
```typescript
const ips = ['8.8.8.8', '1.1.1.1', '114.114.114.114']
const results = await window.api.ipGeo.batchGetLocations(ips)

// 转换为 Map
const locationMap = new Map(results)
console.log(locationMap.get('8.8.8.8'))
```

#### getStatus

获取 IP 地理位置服务状态。

**调用方式**:
```typescript
const status = await window.api.ipGeo.getStatus()
```

**返回值**:
```typescript
interface IPGeoServiceStatus {
  initialized: boolean      // 是否已初始化
  cacheSize: number         // 缓存条目数
  cityDbLoaded: boolean     // 城市数据库是否加载
  countryDbLoaded: boolean  // 国家数据库是否加载
  asnDbLoaded: boolean      // ASN 数据库是否加载
}
```

**示例**:
```typescript
const status = await window.api.ipGeo.getStatus()
console.log(`缓存大小: ${status.cacheSize}`)
console.log(`数据库状态: ${status.initialized ? '正常' : '未初始化'}`)
```

#### clearCache

清空 IP 地理位置缓存。

**调用方式**:
```typescript
await window.api.ipGeo.clearCache()
```

**返回值**: void

**示例**:
```typescript
await window.api.ipGeo.clearCache()
console.log('缓存已清空')
```

#### reinitialize

重新初始化 IP 地理位置服务。

**调用方式**:
```typescript
await window.api.ipGeo.reinitialize()
```

**返回值**: void

**用途**: 当数据库文件更新后，重新加载数据库。

**示例**:
```typescript
// 更新数据库文件后
await window.api.ipGeo.reinitialize()
console.log('服务已重新初始化')
```

## 类型定义

### ThreatLevel

威胁等级枚举。

```typescript
type ThreatLevel = 'critical' | 'high' | 'medium' | 'low'
```

### LogEntryInput

日志条目输入接口。

```typescript
interface LogEntryInput {
  id: string              // 唯一标识
  timestamp: number       // 时间戳
  ip?: string            // IP 地址
  method?: string        // HTTP 方法
  path?: string          // 请求路径
  statusCode?: number    // 状态码
  responseSize?: number  // 响应大小
  userAgent?: string     // 用户代理
  referer?: string       // 来源
  threatLevel?: ThreatLevel  // 威胁等级
  threats?: string[]     // 威胁类型
  raw?: string          // 原始日志
}
```

## 错误处理

所有 API 调用都应该包含错误处理：

```typescript
try {
  const location = await window.api.ipGeo.getLocation(ip)
  // 处理结果
} catch (error) {
  console.error('IP 查询失败:', error)
  // 错误处理
}
```

## 性能建议

### 1. 使用批量查询

对于多个 IP 查询，使用 `batchGetLocations` 而不是多次调用 `getLocation`：

```typescript
// ❌ 不推荐
for (const ip of ips) {
  const location = await window.api.ipGeo.getLocation(ip)
}

// ✅ 推荐
const results = await window.api.ipGeo.batchGetLocations(ips)
```

### 2. 缓存结果

服务内部已实现缓存，重复查询会直接返回缓存结果。

### 3. 监控缓存大小

定期检查缓存大小，必要时清理：

```typescript
const status = await window.api.ipGeo.getStatus()
if (status.cacheSize > 40000) {
  await window.api.ipGeo.clearCache()
}
```

## 限制说明

### 缓存限制

- **最大缓存**: 50,000 条
- **清理阈值**: 45,000 条
- **清理策略**: FIFO（先进先出）

### 查询限制

- **单次批量查询**: 建议不超过 10,000 个 IP
- **并发查询**: 无限制（内部已优化）

### 数据库要求

- **城市数据库**: GeoLite2-City.mmdb（必需）
- **国家数据库**: GeoLite2-Country.mmdb（必需）
- **ASN 数据库**: GeoLite2-ASN.mmdb（可选）

## 示例代码

### 完整示例

```typescript
// 初始化检查
const status = await window.api.ipGeo.getStatus()
if (!status.initialized) {
  console.error('IP 地理位置服务未初始化')
  return
}

// 单个查询
const singleResult = await window.api.ipGeo.getLocation('8.8.8.8')
console.log('单个查询结果:', singleResult)

// 批量查询
const ips = ['8.8.8.8', '1.1.1.1', '114.114.114.114']
const batchResults = await window.api.ipGeo.batchGetLocations(ips)
const locationMap = new Map(batchResults)

// 处理结果
for (const [ip, location] of locationMap) {
  console.log(`${ip} -> ${location.country}, ${location.city}`)
}

// 检查缓存
const newStatus = await window.api.ipGeo.getStatus()
console.log(`当前缓存: ${newStatus.cacheSize} 条`)

// 清理缓存（如果需要）
if (newStatus.cacheSize > 40000) {
  await window.api.ipGeo.clearCache()
  console.log('缓存已清理')
}
```

## 更新日志

### v1.1.0
- ✅ 初始 API 版本
- ✅ 支持单个和批量查询
- ✅ 缓存系统
- ✅ 服务状态查询

### 未来计划
- [ ] 支持 IPv6
- [ ] 自定义数据库路径
- [ ] 查询统计信息
- [ ] 异步事件通知
