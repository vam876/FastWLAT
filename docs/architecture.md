# 架构设计

FastWLAT 系统架构说明

## 整体架构

FastWLAT 采用 Electron 桌面应用架构，分为三个主要部分：

```
┌─────────────────────────────────────────┐
│         Electron 应用                    │
├─────────────────────────────────────────┤
│                                         │
│  ┌──────────────────────────────────┐  │
│  │   渲染进程 (Renderer Process)     │  │
│  │   ┌──────────────────────────┐   │  │
│  │   │  Vue 3 前端应用           │   │  │
│  │   │  - 日志解析               │   │  │
│  │   │  - 数据分析               │   │  │
│  │   │  - 图表渲染               │   │  │
│  │   │  - IndexedDB 存储         │   │  │
│  │   └──────────────────────────┘   │  │
│  └──────────────────────────────────┘  │
│              ↕ IPC 通信                 │
│  ┌──────────────────────────────────┐  │
│  │   主进程 (Main Process)           │  │
│  │   - 窗口管理                      │  │
│  │   - IP 地理位置查询               │  │
│  │   - 文件系统访问                  │  │
│  │   - 系统级 API                    │  │
│  └──────────────────────────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

## 主进程 (Main Process)

### 职责

- **窗口管理**: 创建和管理应用窗口
- **IPC 通信**: 处理渲染进程的请求
- **系统 API**: 提供系统级功能访问
- **IP 地理位置**: MaxMind 数据库查询

### 核心模块

#### 1. 主入口 (index.ts)

```typescript
// 窗口创建
function createWindow(): void {
  const mainWindow = new BrowserWindow({
    width: 1600,
    height: 1000,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })
}

// IPC 处理器
ipcMain.handle('ip-geo:getLocation', async (_, ip) => {
  return ipGeoLocationService.getIPLocation(ip)
})
```

#### 2. IP 地理位置服务 (ipGeoLocationService.ts)

```typescript
class IPGeoLocationService {
  // MaxMind 数据库读取器
  private cityReader: maxmind.Reader
  private countryReader: maxmind.Reader
  private asnReader: maxmind.Reader
  
  // 缓存系统
  private cache = new Map<string, IPLocationInfo>()
  
  // 查询方法
  async getIPLocation(ip: string): Promise<IPLocationInfo>
  async batchGetIPLocations(ips: string[]): Promise<Map>
}
```

**特性**:
- 三级数据库查询（城市 → 国家 → ASN）
- 智能缓存（最多 50,000 条）
- 批量查询优化
- 私有 IP 识别

## 渲染进程 (Renderer Process)

### 技术栈

- **Vue 3**: 前端框架
- **PrimeVue**: UI 组件库
- **ECharts**: 数据可视化
- **Tailwind CSS**: 样式框架
- **Dexie.js**: IndexedDB 封装
- **Web Workers**: 多线程处理

### 核心功能模块

#### 1. 日志解析 (logParser.ts)

```typescript
// 支持多种日志格式
- Apache Combined
- Apache Common
- Nginx
- IIS
- 自定义格式
```

**处理流程**:
```
原始日志 → 格式识别 → 字段提取 → 数据验证 → 结构化数据
```

#### 2. 数据存储 (indexedDBStore.ts)

```typescript
// IndexedDB 数据库结构
databases:
  - logs: 日志记录
  - stats: 统计数据
  - cache: 缓存数据
  - settings: 用户设置
```

**特性**:
- 支持大数据量（百万级）
- 索引优化查询
- 增量更新
- 自动清理

#### 3. 威胁检测 (threatDetectionEngine.ts)

```typescript
// 威胁检测规则
rules:
  - SQL 注入检测
  - XSS 攻击检测
  - 路径遍历检测
  - 暴力破解检测
  - 异常流量检测
```

#### 4. 数据分析 (statsManager.ts)

```typescript
// 统计维度
dimensions:
  - 时间分布
  - IP 分布
  - 状态码分布
  - 路径访问
  - 用户代理
  - 地理位置
```

## 预加载脚本 (Preload)

### 作用

在渲染进程和主进程之间提供安全的 API 桥接。

```typescript
// 暴露安全的 API
const api = {
  ipGeo: {
    getLocation: (ip) => ipcRenderer.invoke('ip-geo:getLocation', ip),
    batchGetLocations: (ips) => ipcRenderer.invoke('ip-geo:batchGetLocations', ips)
  }
}

contextBridge.exposeInMainWorld('api', api)
```

## 数据流

### 日志导入流程

```
1. 用户选择文件
   ↓
2. 文件读取 (主进程)
   ↓
3. 格式识别 (渲染进程)
   ↓
4. Worker 解析 (多线程)
   ↓
5. IP 地理位置查询 (主进程)
   ↓
6. 威胁检测 (渲染进程)
   ↓
7. 存储到 IndexedDB
   ↓
8. 更新统计数据
   ↓
9. 渲染图表
```

### IP 查询流程

```
1. 渲染进程请求
   ↓
2. IPC 通信到主进程
   ↓
3. 检查缓存
   ├─ 命中 → 返回缓存
   └─ 未命中 ↓
4. 查询 MaxMind 数据库
   ├─ 城市数据库
   ├─ 国家数据库
   └─ ASN 数据库
   ↓
5. 合并结果
   ↓
6. 缓存结果
   ↓
7. 返回渲染进程
```

## 性能优化

### 1. 多线程处理

```typescript
// Web Workers 处理大数据
parseWorker: 日志解析
ipWorker: IP 批量查询
statsWorker: 统计计算
```

### 2. 虚拟滚动

```typescript
// 大列表渲染优化
- 只渲染可见区域
- 动态加载数据
- 减少 DOM 节点
```

### 3. 增量更新

```typescript
// 统计数据增量计算
- 避免全量重算
- 只更新变化部分
- 提高响应速度
```

### 4. 智能缓存

```typescript
// 多级缓存策略
L1: 内存缓存 (Map)
L2: IndexedDB
L3: 文件系统
```

## 安全设计

### 1. 进程隔离

```typescript
// 渲染进程安全配置
webPreferences: {
  nodeIntegration: false,    // 禁用 Node 集成
  contextIsolation: true,    // 启用上下文隔离
  sandbox: false             // 需要访问文件系统
}
```

### 2. CSP 策略

```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' blob:; 
               worker-src 'self' blob:;">
```

### 3. IPC 安全

```typescript
// 只暴露必要的 API
// 验证所有输入
// 错误处理完善
```

## 扩展性

### 插件系统（规划中）

```typescript
// 插件接口
interface Plugin {
  name: string
  version: string
  init(): void
  onLogParsed(log: LogEntry): void
  onAnalysis(data: AnalysisData): void
}
```

### 自定义规则

```typescript
// 威胁检测规则可配置
// 日志格式可扩展
// 导出格式可定制
```

## 技术选型理由

### 为什么选择 Electron？

- ✅ 跨平台支持
- ✅ 本地数据处理
- ✅ 无需服务器
- ✅ 丰富的 Node.js 生态

### 为什么选择 Vue 3？

- ✅ 响应式系统
- ✅ 组件化开发
- ✅ 性能优秀
- ✅ 生态完善

### 为什么选择 IndexedDB？

- ✅ 大容量存储
- ✅ 异步操作
- ✅ 索引查询
- ✅ 浏览器原生支持

## 未来规划

### 短期（v1.2）

- [ ] 插件系统
- [ ] 更多日志格式
- [ ] 实时监控

### 中期（v2.0）

- [ ] 分布式分析
- [ ] 机器学习检测
- [ ] 云端同步

### 长期

- [ ] 企业版功能
- [ ] API 服务
- [ ] 移动端支持
