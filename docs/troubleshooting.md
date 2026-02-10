# 故障排除

FastWLAT 问题诊断与解决指南

## 诊断工具

### 1. 验证脚本

运行验证脚本检查项目状态：

```bash
npm run verify
```

检查项目：
- ✅ 文件完整性
- ✅ 依赖安装
- ✅ 配置正确性
- ✅ 数据库文件

### 2. 开发者工具

按 `F12` 或 `Ctrl+Shift+I` 打开开发者工具：

- **Console**: 查看错误日志
- **Network**: 检查网络请求
- **Application**: 查看 IndexedDB
- **Performance**: 性能分析

### 3. 日志输出

查看终端输出的日志信息：

```
[IPGeoLocationService] 数据库加载成功
[Main] 窗口创建完成
[Renderer] 应用初始化
```

## 常见错误

### 错误 1: 应用无法启动

**症状**:
```
Error: Cannot find module 'electron'
```

**原因**: 依赖未正确安装

**解决方案**:
```bash
# 重新安装依赖
rm -rf node_modules package-lock.json
npm install

# 重建原生模块
npm run postinstall
```

### 错误 2: 白屏问题

**症状**: 应用启动后显示白屏

**原因**: 
- 前端资源加载失败
- JavaScript 错误
- 路径配置错误

**解决方案**:

1. **检查控制台**
   ```
   按 F12 查看错误信息
   ```

2. **验证文件**
   ```bash
   npm run verify
   ```

3. **重新构建**
   ```bash
   npm start
   ```

### 错误 3: GeoIP 数据库加载失败

**症状**:
```
[IPGeoLocationService] 数据库文件不存在
```

**原因**: 数据库文件缺失或损坏

**解决方案**:

1. **检查文件**
   ```bash
   ls -lh data/
   # 应该看到三个 .mmdb 文件
   ```

2. **验证文件大小**
   ```
   GeoLite2-City.mmdb    ~58 MB
   GeoLite2-Country.mmdb ~9 MB
   GeoLite2-ASN.mmdb     ~10 MB
   ```

3. **重新下载**
   - 从 MaxMind 官网下载
   - 解压到 `data/` 目录

### 错误 4: 原生模块错误

**症状**:
```
Error: The module was compiled against a different Node.js version
```

**原因**: 原生模块版本不匹配

**解决方案**:
```bash
# 重建原生模块
npm run postinstall

# 或手动重建
npx electron-rebuild
```

### 错误 5: 内存不足

**症状**:
```
FATAL ERROR: Reached heap limit
```

**原因**: 处理数据量过大

**解决方案**:

1. **增加内存限制**
   ```bash
   # 临时增加
   NODE_OPTIONS="--max-old-space-size=4096" npm start
   ```

2. **分批处理**
   - 减少单次导入数据量
   - 清理旧数据

3. **优化代码**
   - 使用流式处理
   - 及时释放内存

## 性能问题

### 问题 1: 启动缓慢

**诊断**:
```bash
# 查看启动时间
time npm start
```

**优化方案**:

1. **减少启动加载**
   - 延迟加载非关键模块
   - 使用懒加载

2. **优化数据库**
   - 清理缓存
   - 重建索引

3. **检查系统**
   - 关闭其他程序
   - 检查磁盘空间

### 问题 2: 解析速度慢

**诊断**:
```typescript
// 在代码中添加计时
console.time('parse')
// 解析代码
console.timeEnd('parse')
```

**优化方案**:

1. **使用 Worker**
   - 多线程处理
   - 并行解析

2. **批量处理**
   - 分批读取
   - 流式处理

3. **优化正则**
   - 简化正则表达式
   - 使用预编译

### 问题 3: 内存泄漏

**诊断**:
```
1. 打开开发者工具
2. Memory 标签
3. Take heap snapshot
4. 对比多个快照
```

**解决方案**:

1. **及时清理**
   ```typescript
   // 清理不用的数据
   data = null
   cache.clear()
   ```

2. **避免循环引用**
   ```typescript
   // 使用 WeakMap
   const cache = new WeakMap()
   ```

3. **限制缓存大小**
   ```typescript
   if (cache.size > MAX_SIZE) {
     cache.clear()
   }
   ```

## 数据问题

### 问题 1: 数据丢失

**症状**: 导入的数据消失

**原因**:
- IndexedDB 被清理
- 浏览器缓存清除
- 应用崩溃

**解决方案**:

1. **检查 IndexedDB**
   ```
   开发者工具 → Application → IndexedDB
   ```

2. **恢复备份**
   - 从导出文件恢复
   - 重新导入数据

3. **启用自动备份**
   - 定期导出数据
   - 使用云同步

### 问题 2: 数据不一致

**症状**: 统计数据与实际不符

**原因**:
- 增量更新错误
- 缓存未刷新
- 计算逻辑错误

**解决方案**:

1. **重新计算**
   ```typescript
   // 清除缓存
   await window.api.ipGeo.clearCache()
   
   // 重新分析
   reanalyzeData()
   ```

2. **验证数据**
   ```typescript
   // 对比原始数据
   const raw = getRawData()
   const stats = getStats()
   verify(raw, stats)
   ```

3. **重建索引**
   ```typescript
   // 重建 IndexedDB 索引
   await rebuildIndexes()
   ```

## 构建问题

### 问题 1: 构建失败

**症状**:
```
Error: Build failed
```

**诊断**:
```bash
# 查看详细日志
npm run build 2>&1 | tee build.log
```

**解决方案**:

1. **清理缓存**
   ```bash
   rm -rf dist node_modules/.cache
   npm run build
   ```

2. **检查配置**
   ```bash
   # 验证 electron-builder.yml
   cat electron-builder.yml
   ```

3. **更新依赖**
   ```bash
   npm update
   npm run build
   ```

### 问题 2: 打包体积过大

**症状**: 打包文件 > 500 MB

**优化方案**:

1. **排除不必要文件**
   ```yaml
   # electron-builder.yml
   files:
     - "!**/*.map"
     - "!**/*.md"
   ```

2. **压缩资源**
   - 压缩图片
   - 压缩数据文件

3. **使用 ASAR**
   - 已默认启用
   - 减少文件数量

## 系统兼容性

### Windows 问题

**问题**: 杀毒软件误报

**解决方案**:
1. 添加到白名单
2. 使用代码签名
3. 提交误报申诉

### macOS 问题

**问题**: "无法打开，因为无法验证开发者"

**解决方案**:
```bash
# 移除隔离属性
xattr -cr /Applications/FastWLAT.app

# 或在系统偏好设置中允许
```

### Linux 问题

**问题**: 缺少依赖库

**解决方案**:
```bash
# Ubuntu/Debian
sudo apt-get install libgtk-3-0 libnotify4 libnss3

# Fedora
sudo dnf install gtk3 libnotify nss
```

## 获取支持

### 1. 收集信息

提交问题前，收集以下信息：

```bash
# 系统信息
node --version
npm --version
electron --version

# 应用信息
npm run verify

# 错误日志
# 复制控制台输出
```

### 2. 提交 Issue

包含以下内容：

- **问题描述**: 清晰描述问题
- **复现步骤**: 如何触发问题
- **预期行为**: 应该怎样
- **实际行为**: 实际发生了什么
- **环境信息**: 系统、版本等
- **错误日志**: 完整的错误信息
- **截图**: 如果有帮助

### 3. 社区支持

- GitHub Issues
- GitHub Discussions
- 邮件支持

## 预防措施

### 1. 定期备份

```bash
# 导出数据
# 使用应用的导出功能

# 备份配置
cp -r ~/.config/fastwlat ~/backup/
```

### 2. 保持更新

```bash
# 检查更新
git fetch
git status

# 更新应用
git pull
npm install
```

### 3. 监控资源

- 定期检查内存使用
- 清理缓存数据
- 优化数据库

### 4. 测试环境

- 在测试环境验证
- 备份后再更新
- 保留旧版本
