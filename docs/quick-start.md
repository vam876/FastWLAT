# 快速入门

5分钟快速上手 FastWLAT

## 环境要求

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0
- **操作系统**: Windows / macOS / Linux

## 安装步骤

### 1. 克隆项目

```bash
git clone https://github.com/yourusername/fastwlat.git
cd fastwlat
```

### 2. 安装依赖

```bash
npm install
```

安装过程会自动：
- 下载所有依赖包
- 重建原生模块
- 配置 Electron 环境

**预计时间**: 2-3 分钟

### 3. 启动应用

```bash
npm start
```

应用将在 2-3 秒内启动，自动打开主窗口。

## 验证安装

运行验证脚本确保一切正常：

```bash
npm run verify
```

如果看到 `✅ Verification PASSED`，说明安装成功！

## 第一次使用

### 1. 导入日志文件

1. 点击"导入"按钮
2. 选择日志文件或粘贴日志内容
3. 选择日志格式（自动检测）
4. 点击"开始解析"

### 2. 查看分析结果

- **仪表板**: 查看总体统计
- **日志视图**: 浏览详细日志
- **分析页面**: 深度数据分析
- **威胁地图**: 地理位置可视化

### 3. 导出数据

1. 选择要导出的数据
2. 选择导出格式（CSV / JSON / Excel）
3. 点击"导出"按钮

## 常用命令

```bash
# 启动应用
npm start

# 验证安装
npm run verify

# 构建应用
npm run build

# 查看帮助
npm run --help
```

## 示例数据

项目包含示例日志文件，位于：
```
out/renderer/example_logs/test.log
```

可以用它来测试应用功能。

## 下一步

- 阅读 [用户手册](./user-guide.md) 了解详细功能
- 查看 [开发指南](./development.md) 开始开发
- 遇到问题？查看 [常见问题](./faq.md)

## 需要帮助？

- 查看 [故障排除](./troubleshooting.md)
- 提交 [Issue](https://github.com/yourusername/fastwlat/issues)
- 加入讨论区交流
