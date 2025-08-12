项目仍在优化中，以下为预发布版 README 草案，您可以关注项目获取最新的体验资格。
## FastWLAT（Fast Web Log Analysis Tool）

基于 Electron + Vue 3 + TypeScript 的高性能 Web 日志分析工具。支持本地内存模式与 Redis 高性能模式，面向数十万级日志的导入、检索、分析与可视化。

- **跨平台桌面应用**：Windows/macOS/Linux
- **大数据优化**：虚拟滚动、聚合树、分批导入、增量分析
- **智能分析**：威胁规则引擎、可视化图表、动态采样
- **模式可切换**：本地内存模式（轻量、极速）/ Redis 模式（高性能）

## 预发布说明

- 此 README 为预发布版，用于展示产品能力与操作指引。
- 新版 Redis 模式正在持续优化：全量显示、服务器端聚合、搜索分页、导入加速方案已就绪；计划补充更高级的服务端过滤，进一步提升搜索性能。

## 功能总览

- **数据导入**
  - 支持 Apache/Nginx/IIS/Tomcat/自定义 JSON 等格式
  - Web Workers 并行解析（UI 不阻塞）
  - 超大文件自动分片、增量进度反馈
  - 本地模式存内存；Redis 模式入库流处理

- **日志视图（Log View）**
  - 列表/树状/分析三种视图模式
  - 高性能虚拟滚动
  - 过滤与搜索（状态码、IP、方法、路径、时间范围等）
  - 树状视图（Redis 模式）采用服务器端聚合（Top URLs）秒级构建
 
<img width="554" height="294" alt="image" src="https://github.com/user-attachments/assets/d08ba216-d954-4a8b-b29e-8fe8a4707891" />

<img width="554" height="294" alt="image" src="https://github.com/user-attachments/assets/0615edf1-8c74-43af-9541-3e34a91aa025" />

<img width="554" height="294" alt="image" src="https://github.com/user-attachments/assets/0794c448-aa18-401b-aa10-cb698a7588cd" />
<img width="554" height="294" alt="image" src="https://github.com/user-attachments/assets/d2b75c85-f74d-4bf4-be66-33f6a8722ff0" />
<img width="554" height="294" alt="image" src="https://github.com/user-attachments/assets/bede1ae9-87ef-4af3-8361-57d5a1dbcb8b" />


























- **仪表盘（Dashboard）**
  - 总量、独立 IP、带宽、响应时间等关键 KPI
  - TOP IP、TOP 页面、错误分布
  - 轻量读取 Redis 统计，避免全量抓取
<img width="554" height="294" alt="image" src="https://github.com/user-attachments/assets/35c122a3-c9b3-4ff3-af01-f10e80248880" />

- **威胁分析（Threat Analysis）**
  - 规则引擎（可启用/禁用）
  - 大数据优化：5 万以下全量分析，以上自动采样（可强制全量）
  - 可视化图表：威胁等级分布、分类统计、时间线、IP 与方法画像
<img width="554" height="294" alt="image" src="https://github.com/user-attachments/assets/a7f31e9d-7e53-45de-ae50-da3fbf5c6903" />
<img width="554" height="294" alt="image" src="https://github.com/user-attachments/assets/2309f23e-faff-4af7-aed2-9a574a7b0eaa" />


- **规则管理（Rules）**
  - 自定义规则（名称、正则、等级、分类、启停）
  - 一键重新分析
<img width="554" height="294" alt="image" src="https://github.com/user-attachments/assets/cf4896c6-ebc0-4720-b50b-af72ef34e8bb" />

- **设置（Settings）**
  - Redis 连接配置（Host/Port/Password/DB）
  - 模式切换（local/redis）
  - 数据与缓存管理
  - <img width="554" height="294" alt="image" src="https://github.com/user-attachments/assets/d6d6e252-d3fd-4eb2-8454-dd7d70fc9f5d" />


## 界面导航简介

- **导入页面（Import）**：选择文件/示例/粘贴文本，查看格式检测、解析进度、分批存储进度；支持超大数据自动分片与进度条反馈。
- **日志页面（Log View）**：
  - 列表：分页与虚拟滚动
  - 树状：本地模式使用全量构建；Redis 模式使用 Top URLs 聚合秒级生成
  - 分析：大数据下自动采样（可切换强制全量）
- **仪表盘（Dashboard）**：总览统计图与 TOP 榜单，实时指标（模拟或来源统计）。
- **威胁分析（Threat Analysis）**：规则引擎、图表视图、分类/规则筛选、动态加载日志。
- **规则管理（Rules）**：新增/编辑/启用/禁用规则。
- **设置（Settings）**：Redis 连接、数据模式、清理数据、调试信息。


## 数据模式

- **本地内存模式（local）**
  - 适合小中等数据量（<40 万）
  - 解析后直接写入内存 store
  - 所有分析在本地完成

- **Redis 模式（redis）**
  - 适合大数据量（数十万至上百万）
  - 解析后分批写入 Redis（默认每批 10000）
  - 树视图使用服务端聚合（Top URLs）秒开
  - 仪表盘/分析页优先读取统计，避免全量拉取

在设置页面可切换模式；应用在启动时会自动检测 Redis 连接（断网/不可用时回退到本地模式）。

## 使用流程

- **导入日志**
  - 从文件/示例/粘贴导入
  - 自动格式检测（或手动指定）
  - 并行解析 + 分片入库（Redis）
  - 进度实时显示（解析 0-80%；存储 80%-100%）

- **浏览与过滤**
  - 日志页面切换列表/树/分析
  - 按 IP/方法/状态码/路径/时间范围过滤
  - Redis 模式下搜索：优先聚合辅助 + 分段回填（计划增强为服务器端分页过滤）

- **威胁分析**
  - 加载规则 → 采样/全量分析
  - 查看图表、分类、TOP IP/方法、时间线
  - 可启用/禁用规则并重新分析

## 性能优化（已内置）

- 并行解析：Web Workers，避免 UI 阻塞
- 分批入库：默认 10000/批，聚合统计合并一次性提交
- 树状聚合：Redis 模式使用 `Top URLs` 聚合构建树
- 虚拟滚动：大列表渲染优化
- 分析采样：>5 万自动采样（可强制全量）
- 轻量统计：仪表盘与分析先读 Redis 统计，再补全明细

## 已知问题与说明（预发布）

- **Redis 搜索过滤在极大数据集下仍可能偏慢**：短期通过“聚合辅助 + 分段回填”已优化；后续将增补主进程 `queryLogs` 的 path/method/status 基础过滤与分页游标，彻底后端化。
- **导入时控制台可能出现少量 URL 解码告警**：已加严格判断（仅在合法 `%xx` 时解码），不会中断导入。
- **首次切换到 Redis 模式后建议重启应用**：确保预加载 API（如 `getTopUrls`）完成注入，避免 “not a function”。


## 路线图（Roadmap）

- 服务器端分页过滤：`queryLogs` 支持 path/method/status + offset/limit
- 更丰富的图表与报表导出
- 更强规则引擎（分组、权重、动作、告警）
- 多源采集与实时流（WebSocket/Stream）
- 国际化（i18n）与更多主题
