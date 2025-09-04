## FastWLAT（Fast Web Log Analysis Tool）

基于 Electron + Vue 3 + TypeScript 的高性能 Web 日志分析工具。支持本地内存模式、Zinc(未开放)与 Redis 高性能模式(未开放)。
## 🏆 FastWLAT功能介绍

- **最新版本**: V1.0.1

- **更新日期**: 2025/09/03

### 📊 智能仪表盘 - 访问态势一目了然

<img width="1384" height="861" alt="image" src="https://github.com/user-attachments/assets/816b4e09-9cf1-4a55-a51c-a1d4522048c4" />




### 📥 强大导入系统 - 支持主流WEB日志格式  

- **格式全覆盖**: Apache、Nginx、IIS、Tomcat等日志格式

- **智能识别**:   自动格式检测

- **大文件处理**: 百万级日志处理优化

- **三种方式**: 文件上传、文本粘贴、示例数据快速体验

- 格式不兼容欢迎提供示例格式仅适配

<img width="1657" height="942" alt="image-20250901111015860" src="https://github.com/user-attachments/assets/bb15021a-fbfd-44a6-95e5-f0dd10f66be4" />


### 🔍 高性能日志视图 - 百万条日志秒级响应

- **虚拟滚动**: 支持百万级日志流畅浏览

- **多视图模式**: 表格、树状、聚合三种视图

- **毫秒级搜索**: 全文搜索、正则匹配、条件过滤

- **智能分页**: 动态加载，内存自动回收

- **快速过滤功能**: 一键剔除静态文件，一键排除404、30X等状态码日志，留下清爽的日志浏览视图，即可节省渲染性能，也可以排除分析干扰和误报


<img width="1650" height="889" alt="image-20250901111302683" src="https://github.com/user-attachments/assets/85327756-f27f-4147-9e07-f2f2c00ced24" />


**上图：** 日志列表视图，可以快速过滤、搜索和分析

<img width="1656" height="937" alt="image-20250901111437398" src="https://github.com/user-attachments/assets/6b259c74-f468-4123-a5d1-59391a2cfda2" />


**上图：** 树目录视图，通过日志还原出网站原本的目录结构，可以折叠、展开，支持搜索、过滤、仅显示某个路径等多种功能，出现告警日志会显示分析按钮

<img width="1264" height="779" alt="image-20250901111528374" src="https://github.com/user-attachments/assets/7b3566d7-33d1-4f71-8e21-e8e8274742ac" />


**上图：** 出现告警的文件会由分析按钮，点击分析按钮进行高级分析视图（仅针对当前选择的路径）
<img width="1149" height="800" alt="image-20250901111625012" src="https://github.com/user-attachments/assets/601aaafc-55b9-42f7-85fd-5e09893f72a0" />


**上图：** 选择对应的文件会出现详情按钮，点击详情按钮进行详情视图（包含当前路径的所有日志进行展示）
<img width="1645" height="899" alt="image-20250901111701236" src="https://github.com/user-attachments/assets/cef5584a-b86a-47f0-ba5f-17e6232c3911" />

**上图：** 高级分析视图，可以快速排序、搜索和分析，点击分析按钮可以针对当前路径、IP、地区、状态码等数据进行汇聚分析


### 📈 专业分析引擎 - 数据洞察一步到位

- **多维分析**: 时间、状态码、用户代理、地理位置

- **趋势识别**: 24小时访问模式、异常时段检测  

- **性能分析**: 响应时间分布、错误率统计

  ![image-20250901111855549](C:\Users\Waner\AppData\Roaming\Typora\typora-user-images\image-20250901111855549.png)


### 🛡️ 智能威胁检测 - 企业级安全防护

- **威胁类型**: 内置多种威胁检测规则，分析页面支持分类、筛选
- **条件引擎**: 状态码、IP、时间、返回数据包大小等多维度精准匹配

<img width="1646" height="898" alt="image-20250901111855549" src="https://github.com/user-attachments/assets/bb70ad6e-5223-419b-b034-0c723dc77fd1" />




- **二次过滤**: 告警页面支持正则表达式二次匹配，高亮显示定位匹配规则快速优化

<img width="1665" height="690" alt="image-20250901165129877" src="https://github.com/user-attachments/assets/0ba2ca85-19e0-42e3-ad71-9d82af5a7f11" />


### 🗺️ 威胁地图可视化 - 全球威胁态势感知

- **地理定位**: 基于MaxMind数据库的精准定位，通过优秀的前端库和地图数据进行可视化展示，将访问和攻击来源渲染到地图

<img width="1605" height="763" alt="image-20250901112155492" src="https://github.com/user-attachments/assets/955a3911-c99e-4845-a527-6bf9ebd307cd" />


- **实时动画**: 支持世界地图和中国地图进行动态展示，威胁来源一目了然

<img width="1628" height="930" alt="image-20250901112300487" src="https://github.com/user-attachments/assets/6957e5ce-b1bb-4360-9728-4b34e6de5c39" />


- **双模式**: 流量地图模式 ↔ 攻击地图模式无缝切换，攻击地图可以渲染出现告警的攻击数据，基于源IP和自定义防护地标进行攻击路径绘制

<img width="1549" height="703" alt="image-20250901112325678" src="https://github.com/user-attachments/assets/54811a24-3a55-4c24-be15-1ec078da5620" />


- **交互探索**: 缩放、筛选、详情查看，点击对应的地区节点出现详情卡片

<img width="1599" height="937" alt="image-20250901112405723" src="https://github.com/user-attachments/assets/f3abfda3-8fb8-485e-86a6-de743b112667" />


### ⚙️ 灵活规则管理 - 自定义安全策略

<img width="1664" height="947" alt="image-20250901112433656" src="https://github.com/user-attachments/assets/fc04478a-08b0-4fa4-a417-3f9d7d8734db" />


- **可视化配置**: 图形界面，无需编程基础

- **条件组合**: HTTP方法、状态码、IP、时间范围、返回长度等

- **实时生效**: 规则修改即时应用，无需重启

- **高度自定义**: 可以添加删除优化告警规则，不加密，无任何限制

<img width="1310" height="712" alt="image-20250901112457905" src="https://github.com/user-attachments/assets/ac8331d7-eff0-41a8-a4cc-d2652480806b" />


### 🎨 个性化主题 - 适合每个团队的风格

- **三种精美主题**: 天空蓝、简约灰、经典蓝紫
- **一键切换**: 实时预览，用户偏好自动保存
- **现代设计**: 现代化的UI/UX设计

<img width="1791" height="989" alt="image-20250901112800633" src="https://github.com/user-attachments/assets/8892712e-834f-4496-b7f3-a4153153ada7" />


### ⚙️ 智能设置中心 - 系统优化一站式

- **三模式存储**: 本地内存、zinc（ES兼容）、Redis高性能无缝切换。目前仅开放内存模式

- **性能监控**: 实时内存使用、缓存状态监控

- **连接管理**: Redis自动重连和状态检测

- **配置持久**: 用户设置自动保存和恢复

<img width="1614" height="929" alt="image-20250901112826862" src="https://github.com/user-attachments/assets/d7394d36-56d7-4291-95b9-ed949f856862" />


## 🎉 结语

FastWLAT不仅仅是一个日志分析工具，更是我们对Web日志分析工具的方法和技巧的思考和实践结果。通过创新、高度自定义的功能实现和友好的用户界面，希望能够真正解决一部分WEB日志分析的痛点，进一步降低WEB日志分析的门槛。

相信，好的工具应该是简单易用的，强大的功能应该是开放透明的。FastWLAT的代码99%由于AI生成，后续优化完成后会进行完全开源。

程序还在不断完善中，目前版本可能存在较多的BUG，欢迎各位贡献告警规则和提出贴合实战改进建议，在程序开源前都会进行持续的优化。由于图形界面和Tree视图的影响，目前在处理大日志文件时存在一些问题，后续版本会开放Redis和Zinc模式，支持更大体量的日志导入分析。
