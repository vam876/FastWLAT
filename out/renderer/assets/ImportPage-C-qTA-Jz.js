import { L as LogFormat, d as defineComponent, l as useThemeStore, m as ref, c as computed, a as createElementBlock, e as createBaseVNode, f as createCommentVNode, n as normalizeClass, p as unref, t as toDisplayString, o as openBlock, F as Fragment, r as renderList, g as createTextVNode, q as normalizeStyle, b as createStaticVNode, v as withModifiers, h as onMounted, x as getCurrentDataMode, i as onUnmounted, y as removeDataModeListener, j as createBlock, w as withCtx, k as createVNode, z as addDataModeListener, s as useRouter, A as detectDataMode, B as watch } from "./index-FPjz1pj-.js";
import { u as useMemoryStore } from "./memoryStore-DY1yPL7M.js";
import { u as useIndexedDBStore } from "./indexedDBStore-vYrXL9Qh.js";
import { _ as _sfc_main$8 } from "./ThemeContainer.vue_vue_type_script_setup_true_lang-CmUDCaT3.js";
const formatPatterns = {
  [LogFormat.APACHE]: {
    patterns: [
      /^\d+\.\d+\.\d+\.\d+ - - \[.+\] ".+" \d+ \d+/,
      /^\d+\.\d+\.\d+\.\d+ - \w+ \[.+\] ".+" \d+ \d+ ".+" ".+"/,
      /^(\d+\.\d+\.\d+\.\d+) - ([^\s]*) \[([^\]]+)\] "([^"]*)" (\d+) (\d+)( "([^"]*)" "([^"]*)")?/
    ],
    example: '192.168.1.1 - - [25/Dec/2021:10:00:00 +0000] "GET / HTTP/1.1" 200 1234'
  },
  [LogFormat.NGINX]: {
    patterns: [
      /^\d+\.\d+\.\d+\.\d+ - .* \[.+\] ".+" \d+ \d+ ".+" ".+"/,
      /^(\d+\.\d+\.\d+\.\d+) - ([^\s]*) \[([^\]]+)\] "([^"]*)" (\d+) (\d+) "([^"]*)" "([^"]*)"/
    ],
    example: '192.168.1.1 - user [25/Dec/2021:10:00:00 +0000] "GET / HTTP/1.1" 200 1234 "http://example.com" "Mozilla/5.0"'
  },
  [LogFormat.IIS]: {
    patterns: [
      /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} .+ .+ \d+\.\d+\.\d+\.\d+ .+ .+ \d+ \d+ \d+/,
      /^(\d{4}-\d{2}-\d{2}) (\d{2}:\d{2}:\d{2}) ([^\s]+) ([^\s]+) (\d+\.\d+\.\d+\.\d+) ([^\s]+) ([^\s]+) (\d+) (\d+) (\d+) (\d+) ([^\s]+) ([^\s]+) ([^\s]+) ([^\s]+) (\d+) (\d+) (\d+) (\d+) (\d+) (\d+)/
    ],
    example: "2021-12-25 10:00:00 W3SVC1 SERVER 192.168.1.1 GET /index.html - 80 - 192.168.1.100 HTTP/1.1 Mozilla/5.0 - - example.com 200 0 0 500 300 100"
  },
  [LogFormat.TOMCAT]: {
    patterns: [
      /^\d+\.\d+\.\d+\.\d+ - - \[.+\] ".+" \d+/,
      /^(\d+\.\d+\.\d+\.\d+) - ([^\s]*) \[([^\]]+)\] "([^"]*)" (\d+) (\d+)?/
    ],
    example: '192.168.1.1 - - [25/Dec/2021:10:00:00 +0000] "GET / HTTP/1.1" 200 1234'
  }
};
function detectFormat(sampleLines) {
  const scores = Object.values(LogFormat).reduce((acc, format) => {
    if (format === LogFormat.AUTO || format === LogFormat.GENERIC) return acc;
    acc[format] = 0;
    return acc;
  }, {});
  for (const line of sampleLines) {
    if (!line.trim()) continue;
    for (const [format, config] of Object.entries(formatPatterns)) {
      for (const pattern of config.patterns) {
        if (pattern.test(line)) {
          scores[format]++;
          break;
        }
      }
    }
  }
  let bestFormat = LogFormat.GENERIC;
  let bestScore = 0;
  for (const [format, score] of Object.entries(scores)) {
    if (score > bestScore) {
      bestScore = score;
      bestFormat = format;
    }
  }
  const confidence = sampleLines.length > 0 ? bestScore / sampleLines.length : 0;
  return {
    format: confidence > 0.6 ? bestFormat : LogFormat.GENERIC,
    confidence
  };
}
class WorkerManager {
  constructor(workerCount = navigator.hardwareConcurrency || 4) {
    this.workerPool = [];
    this.taskCounter = 0;
    this.completedTasks = 0;
    this.totalTasks = 0;
    this.limits = {
      localModeMaxSize: 500 * 1024 * 1024,
      // 500MB 限制
      warningSize: 100 * 1024 * 1024,
      // 100MB 警告
      chunkSizeLimit: 20 * 1024 * 1024
      // 20MB 块大小限制
    };
    this.largeFileConfig = {
      maxFileSize: 2 * 1024 * 1024 * 1024,
      // 2GB 绝对上限
      indexedDBMaxFileSize: 2 * 1024 * 1024 * 1024,
      // IndexedDB模式2GB上限
      largeFileThreshold: 1 * 1024 * 1024 * 1024,
      // 1GB算作超大文件
      streamProcessingThreshold: 500 * 1024 * 1024,
      // 500MB开始流式处理
      workerTimeout: 12e4,
      // 2分钟超时（针对大文件）
      memoryCheckInterval: 50 * 1024 * 1024
      // 50MB间隔检查内存
    };
    this.maxWorkers = Math.min(workerCount, 8);
  }
  // 检查文件大小和提供友好提示
  checkFileSize(content, dataMode = "local") {
    const sizeBytes = new Blob([content]).size;
    const sizeMB = sizeBytes / (1024 * 1024);
    const sizeGB = sizeBytes / (1024 * 1024 * 1024);
    console.log(`[WorkerManager] File size check: ${sizeMB.toFixed(2)}MB (${sizeGB.toFixed(2)}GB), mode: ${dataMode}`);
    const maxSize = dataMode === "indexedDB" ? this.largeFileConfig.indexedDBMaxFileSize : this.largeFileConfig.maxFileSize;
    if (sizeBytes > maxSize) {
      return {
        canProcess: false,
        error: `文件过大（${sizeGB.toFixed(2)}GB），${dataMode === "indexedDB" ? "IndexedDB模式" : "本地模式"}最大支持 ${(maxSize / (1024 * 1024 * 1024)).toFixed(1)}GB。
        
🔧 解决方案：
1. 分割文件为较小的部分（建议每个<1GB）
2. 清理日志文件中的冗余数据
3. 使用专业的日志处理工具
4. 考虑使用数据库直接导入

💡 当前文件：${sizeGB.toFixed(2)}GB，建议分割为 ${Math.ceil(sizeGB * 2)} 个文件处理。`
      };
    }
    if (dataMode === "local") {
      if (sizeBytes > this.limits.localModeMaxSize) {
        return {
          canProcess: false,
          error: `文件过大（${sizeMB.toFixed(1)}MB），本地模式建议不超过 ${this.limits.localModeMaxSize / (1024 * 1024)}MB。
          
🔧 解决方案：
1. 使用 IndexedDB 持久化模式处理大文件（推荐）
2. 分割文件为较小的部分
3. 清理日志文件中的冗余数据

💡 提示：IndexedDB 模式可以处理更大的文件并提供数据持久化。`
        };
      }
      if (sizeBytes > this.limits.warningSize) {
        return {
          canProcess: true,
          warning: `文件较大（${sizeMB.toFixed(1)}MB），本地模式处理可能较慢。建议：
          
💡 切换到 IndexedDB 持久化模式获得更好的性能
⚠️ 处理过程中请勿关闭应用`
        };
      }
    } else {
      if (sizeBytes > this.largeFileConfig.largeFileThreshold) {
        return {
          canProcess: true,
          requiresSpecialHandling: true,
          warning: `超大文件检测（${sizeGB.toFixed(2)}GB）。系统将启用特殊优化模式：
          
🚀 优化策略：
1. 增强内存管理和垃圾回收
2. 扩展处理超时时间（2分钟）
3. 小批量分块处理（减少内存压力）
4. 实时内存监控和保护

⏱️ 预计处理时间：${Math.ceil(sizeGB * 10)}分钟
💾 建议确保系统有足够可用内存（>${Math.ceil(sizeGB * 2)}GB）`
        };
      }
      if (sizeBytes > this.largeFileConfig.streamProcessingThreshold) {
        return {
          canProcess: true,
          requiresSpecialHandling: true,
          warning: `大文件检测（${sizeMB.toFixed(1)}MB）。启用优化处理模式。`
        };
      }
    }
    return { canProcess: true };
  }
  async parseFileContent(content, format, onProgress, dataMode = "local", timezoneOffsetMinutes = 0) {
    const sizeCheck = this.checkFileSize(content, dataMode);
    if (!sizeCheck.canProcess) {
      throw new Error(sizeCheck.error);
    }
    if (sizeCheck.warning) {
      console.warn(`[WorkerManager] ${sizeCheck.warning}`);
      if (typeof window !== "undefined" && window.showWarningToast) {
        window.showWarningToast(sizeCheck.warning);
      }
    }
    const isLargeFile = sizeCheck.requiresSpecialHandling;
    if (isLargeFile) {
      try {
        console.log("[WorkerManager] Enabling large file optimization mode");
        if (typeof window !== "undefined" && window.gc) {
          window.gc();
        }
        window.__LARGE_FILE_MODE = true;
      } catch (error) {
        console.warn("[WorkerManager] Error setting up large file mode:", error);
      }
    }
    this.onProgress = onProgress;
    this.completedTasks = 0;
    try {
      const chunks = this.splitIntoChunks(content, dataMode, isLargeFile);
      this.totalTasks = chunks.length;
      console.log(`[WorkerManager] Split file into ${chunks.length} chunks for ${dataMode} mode${isLargeFile ? " (large file mode)" : ""}`);
      await this.initializeWorkerPool();
      const timeoutMs = isLargeFile ? this.largeFileConfig.workerTimeout : 3e4;
      console.log(`[WorkerManager] Using timeout: ${timeoutMs}ms for ${isLargeFile ? "large" : "normal"} file`);
      const maxConcurrent = isLargeFile ? Math.min(this.maxWorkers, 2) : this.maxWorkers;
      const results = [];
      console.log(`[WorkerManager] Processing with max concurrent workers: ${maxConcurrent}`);
      for (let i = 0; i < chunks.length; i += maxConcurrent) {
        const batch = chunks.slice(i, i + maxConcurrent);
        const batchPromises = batch.map(
          (chunk) => this.createTask(chunk.content, chunk.startLine, format, timeoutMs)
        );
        const batchResults = await Promise.all(batchPromises);
        results.push(...batchResults);
        if (isLargeFile && i + maxConcurrent < chunks.length) {
          console.log(`[WorkerManager] Processed batch ${Math.floor(i / maxConcurrent) + 1}/${Math.ceil(chunks.length / maxConcurrent)}, checking memory...`);
          await this.performMemoryMaintenance();
        }
      }
      const allEntries = [];
      const allErrors = [];
      let totalProcessedLines = 0;
      for (const result of results) {
        allEntries.push(...result.entries);
        allErrors.push(...result.errors);
        totalProcessedLines += result.processedLines;
      }
      console.log(`[WorkerManager] Completed parsing: ${allEntries.length} entries, ${allErrors.length} errors`);
      return {
        entries: allEntries,
        errors: allErrors,
        processedLines: totalProcessedLines
      };
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("Maximum call stack size exceeded")) {
          throw new Error(`文件过大导致内存溢出。请尝试：
          
🔧 解决方案：
1. 使用 IndexedDB 持久化模式（推荐）
2. 将文件分割为较小的部分（<500MB）
3. 清理日志文件中的重复数据
4. 重启应用释放内存后重试

💡 当前文件大小：${(new Blob([content]).size / (1024 * 1024)).toFixed(1)}MB`);
        }
        if (error.message.includes("out of memory")) {
          throw new Error(`系统内存不足。建议：
          
🔧 解决方案：
1. 关闭其他应用程序释放内存
2. 使用 IndexedDB 持久化模式处理大文件
3. 重启应用后重试
4. 增加系统虚拟内存`);
        }
        if (error.message.includes("timed out")) {
          throw new Error(`处理超时（大文件需要更多时间）。建议：
          
🔧 解决方案：
1. 将文件分割为较小的部分
2. 确保系统性能良好
3. 使用 IndexedDB 持久化模式获得更好性能
4. 清理系统后台进程`);
        }
      }
      throw error;
    } finally {
      if (isLargeFile) {
        window.__LARGE_FILE_MODE = false;
        await this.performMemoryMaintenance();
      }
    }
  }
  async initializeWorkerPool() {
    if (this.workerPool.length === 0) {
      const initPromises = [];
      for (let i = 0; i < this.maxWorkers; i++) {
        initPromises.push(this.createWorkerPoolItem());
      }
      await Promise.all(initPromises);
      console.log(`[WorkerManager] Initialized worker pool with ${this.workerPool.length} workers`);
    }
  }
  async createWorkerPoolItem() {
    try {
      const worker = await this.createWorker();
      this.workerPool.push({
        worker,
        busy: false,
        taskQueue: []
      });
    } catch (error) {
      console.error("[WorkerManager] Failed to create worker:", error);
      throw error;
    }
  }
  async createWorker() {
    try {
      if (true) {
        return await this.createBlobWorker();
      }
      const workerModule = new URL("" + new URL("parseWorker--PV_UxW-.ts", import.meta.url).href, import.meta.url);
      return new Worker(workerModule, { type: "module" });
    } catch (error) {
      console.warn("[WorkerManager] Failed to create module worker, falling back to blob worker:", error);
      return await this.createBlobWorker();
    }
  }
  async createBlobWorker() {
    try {
      const workerCode = this.getInlineWorkerCode();
      const blob = new Blob([workerCode], { type: "application/javascript" });
      const workerUrl = URL.createObjectURL(blob);
      const worker = new Worker(workerUrl);
      URL.revokeObjectURL(workerUrl);
      return worker;
    } catch (error) {
      console.error("[WorkerManager] Failed to create blob worker:", error);
      throw error;
    }
  }
  getInlineWorkerCode() {
    return `
// Worker 消息类型定义
const ThreatLevel = {
  LOW: 'low',
  MEDIUM: 'medium', 
  HIGH: 'high',
  CRITICAL: 'critical'
};

// Worker 主体
self.onmessage = function(e) {
  const { id, chunk, startLine, format } = e.data;
  
  try {
    const result = parseChunk(chunk, startLine, format);
    self.postMessage({
      entries: result.entries,
      errors: result.errors,
      processedLines: result.processedLines
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    self.postMessage({
      error: errorMessage 
    });
  }
};

function parseChunk(content, startLine, format) {
  const lines = content.split('\\n').filter(line => line.trim());
  const entries = [];
  const errors = [];
  
  // 智能检测策略：根据数据量决定检测模式
  const detectionStrategy = getDetectionStrategy(lines.length);
  
  lines.forEach((line, index) => {
    try {
      const entry = parseLine(line, startLine + index, format);
      // 应用智能检测策略
      if (entry && detectionStrategy.skipImportDetection) {
        entry.threatLevel = ThreatLevel.LOW;
        entry.threats = [];
      }
      if (entry) {
        entries.push(entry);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      errors.push(\`Line \${startLine + index}: \${errorMessage}\`);
    }
  });
  
  return { entries, errors, processedLines: lines.length };
}

function getDetectionStrategy(entryCount) {
  if (entryCount < 50000) {
    return {
      mode: 'IMPORT_TIME',
      skipImportDetection: false,
      useBasicRulesOnly: false,
      enableBackgroundDetection: false,
      description: '实时检测模式 - 导入时立即进行完整威胁检测',
      estimatedPerformanceImpact: 'low'
    };
  } else if (entryCount < 200000) {
    return {
      mode: 'HYBRID',
      skipImportDetection: false,
      useBasicRulesOnly: true,
      enableBackgroundDetection: true,
      description: '混合检测模式 - 导入时基础检测，分析时完整检测',
      estimatedPerformanceImpact: 'medium'
    };
  } else {
    return {
      mode: 'ANALYSIS_PAGE',
      skipImportDetection: true,
      useBasicRulesOnly: false,
      enableBackgroundDetection: true,
      description: '延迟检测模式 - 仅在分析页面进行威胁检测',
      estimatedPerformanceImpact: 'high'
    };
  }
}

function parseLine(line, lineNumber, format) {
  if (!line.trim()) return null;
  
  switch (format) {
    case 'apache':
      return parseApacheLine(line, lineNumber);
    case 'nginx':
      return parseNginxLine(line, lineNumber);
    case 'iis':
      return parseIISLine(line, lineNumber);
    case 'tomcat':
      return parseTomcatLine(line, lineNumber);
    default:
      return parseGenericLine(line, lineNumber);
  }
}

function parseApacheLine(line, lineNumber) {
  const apacheRegex = /^(\\S+) \\S+ \\S+ \\[([^\\]]+)\\] "(\\S+) (\\S+)[^"]*" (\\d+) (\\S+)(?:\\s+"([^"]*)")?(?:\\s+"([^"]*)")?/;
  const match = line.match(apacheRegex);
  
  if (!match) return parseGenericLine(line, lineNumber);
  
  const [, ip, timestamp, method, rawPath, statusCode, size, referer, userAgent] = match;
  
  let path = rawPath || '/';
  try {
    if (/%[0-9A-Fa-f]{2}/.test(path)) {
      if (!path.endsWith('%') && !path.match(/%[0-9A-Fa-f]?$/)) {
        path = decodeURIComponent(path);
      }
    }
  } catch (e) {
    // 保留原始路径
  }
  
  return {
    id: \`apache-\${lineNumber}-\${Date.now()}\`,
    timestamp: parseApacheTimestamp(timestamp),
    ip: ip || 'unknown',
    method: method || 'GET',
    path: path,
    statusCode: parseInt(statusCode) || 200,
    responseSize: size === '-' ? 0 : parseInt(size) || 0,
    userAgent: userAgent || '',
    referer: referer || '',
    threatLevel: determineThreatLevel(parseInt(statusCode), path, userAgent),
    threats: detectThreats(line, path, userAgent),
    raw: line
  };
}

function parseNginxLine(line, lineNumber) {
  const nginxRegex = /^(\\S+) - \\S+ \\[([^\\]]+)\\] "(\\S+) (\\S+)[^"]*" (\\d+) (\\S+)(?:\\s+"([^"]*)")?(?:\\s+"([^"]*)")?/;
  const match = line.match(nginxRegex);
  
  if (!match) return parseGenericLine(line, lineNumber);
  
  const [, ip, timestamp, method, rawPath, statusCode, size, referer, userAgent] = match;
  
  let path = rawPath || '/';
  try {
    if (/%[0-9A-Fa-f]{2}/.test(path)) {
      if (!path.endsWith('%') && !path.match(/%[0-9A-Fa-f]?$/)) {
        path = decodeURIComponent(path);
      }
    }
  } catch (e) {
    // 保留原始路径
  }
  
  return {
    id: \`nginx-\${lineNumber}-\${Date.now()}\`,
    timestamp: parseNginxTimestamp(timestamp),
    ip: ip || 'unknown',
    method: method || 'GET', 
    path: path,
    statusCode: parseInt(statusCode) || 200,
    responseSize: size === '-' ? 0 : parseInt(size) || 0,
    userAgent: userAgent || '',
    referer: referer || '',
    threatLevel: determineThreatLevel(parseInt(statusCode), path, userAgent),
    threats: detectThreats(line, path, userAgent),
    raw: line
  };
}

function parseIISLine(line, lineNumber) {
  // Skip IIS metadata lines (start with #)
  if (line.trim().startsWith('#')) {
    return null
  }
  
  const parts = line.split(' ').filter(p => p.trim());
  if (parts.length < 10) return parseGenericLine(line, lineNumber);
  
  const [date, time, sIp, csMethod, csUriStem, csUriQuery, sPort, csUsername, cIp, csUserAgent, csReferer, scStatus, scSubStatus, scWin32Status, timeTaken] = parts;
  
  const fullPath = csUriQuery && csUriQuery !== '-' ? \`\${csUriStem}?\${csUriQuery}\` : csUriStem;
  
  return {
    id: \`iis-\${lineNumber}-\${Date.now()}\`,
    timestamp: parseIISTimestamp(\`\${date} \${time}\`),
    ip: cIp || 'unknown',
    method: csMethod || 'GET',
    path: fullPath || '/',
    statusCode: parseInt(scStatus) || 200,
    responseSize: 0,
    userAgent: csUserAgent === '-' ? '' : (csUserAgent || ''),
    referer: csReferer === '-' ? '' : (csReferer || ''),
    threatLevel: determineThreatLevel(parseInt(scStatus), fullPath, csUserAgent),
    threats: detectThreats(line, fullPath, csUserAgent),
    timeTaken: timeTaken ? parseInt(timeTaken) : undefined,
    raw: line
  };
}

function parseTomcatLine(line, lineNumber) {
  const tomcatRegex = /^(\\S+) - \\S+ \\[([^\\]]+)\\] "(\\S+) (\\S+)[^"]*" (\\d+) (\\S+)/;
  const match = line.match(tomcatRegex);
  
  if (!match) return parseGenericLine(line, lineNumber);
  
  const [, ip, timestamp, method, path, statusCode, size] = match;
  
  return {
    id: \`tomcat-\${lineNumber}-\${Date.now()}\`,
    timestamp: parseApacheTimestamp(timestamp),
    ip: ip || 'unknown',
    method: method || 'GET',
    path: path || '/',
    statusCode: parseInt(statusCode) || 200,
    responseSize: size === '-' ? 0 : parseInt(size) || 0,
    userAgent: '',
    referer: '',
    threatLevel: determineThreatLevel(parseInt(statusCode), path, ''),
    threats: detectThreats(line, path, ''),
    raw: line
  };
}

function parseGenericLine(line, lineNumber) {
  const ipRegex = /(\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})/;
  const ipMatch = line.match(ipRegex);
  const ip = ipMatch ? ipMatch[1] : 'unknown';
  
  const statusRegex = /\\s(\\d{3})\\s/;
  const statusMatch = line.match(statusRegex);
  const statusCode = statusMatch ? parseInt(statusMatch[1]) : 200;
  
  const methodRegex = /"(GET|POST|PUT|DELETE|HEAD|OPTIONS|PATCH)\\s/i;
  const methodMatch = line.match(methodRegex);
  const method = methodMatch ? methodMatch[1].toUpperCase() : 'GET';
  
  const pathRegex = /"\\w+\\s([^\\s"]+)/;
  const pathMatch = line.match(pathRegex);
  const path = pathMatch ? pathMatch[1] : '/';
  
  return {
    id: \`generic-\${lineNumber}-\${Date.now()}\`,
    timestamp: new Date(),
    ip: ip,
    method: method,
    path: path,
    statusCode: statusCode,
    responseSize: 0,
    userAgent: '',
    referer: '',
    threatLevel: determineThreatLevel(statusCode, path, ''),
    threats: detectThreats(line, path, ''),
    raw: line
  };
}

function parseApacheTimestamp(timestamp) {
  try {
    const cleaned = timestamp.replace(/^\\[|\\]$/g, '').trim();
    
    // Apache格式: 09/Sep/2021:13:48:13 +0800
    if (cleaned.includes('/') && cleaned.includes(':')) {
      const apacheMatch = cleaned.match(/(\\d{1,2})\\/(\\w{3})\\/(\\d{4}):(\\d{2}):(\\d{2}):(\\d{2})\\s*([+-]\\d{4})?/);
      if (apacheMatch) {
        const [, day, month, year, hour, minute, second, timezone] = apacheMatch;
        
        // 月份映射
        const monthMap = {
          'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3,
          'May': 4, 'Jun': 5, 'Jul': 6, 'Aug': 7,
          'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
        };
        
        const monthNum = monthMap[month] !== undefined ? monthMap[month] : 0;
        
        // ✅ 保存原始时间，不做时区转换
        return new Date(
          parseInt(year, 10),
          monthNum,
          parseInt(day, 10),
          parseInt(hour, 10),
          parseInt(minute, 10),
          parseInt(second, 10)
        );
      }
    }
    
    // 回退到默认解析
    const date = new Date(cleaned);
    return isNaN(date.getTime()) ? new Date() : date;
  } catch (e) {
    return new Date();
  }
}

function parseNginxTimestamp(timestamp) {
  try {
    const cleaned = timestamp.replace(/^\\[|\\]$/g, '').trim();
    
    // Nginx也使用Apache格式: 09/Sep/2021:13:48:13 +0800
    if (cleaned.includes('/') && cleaned.includes(':')) {
      const apacheMatch = cleaned.match(/(\\d{1,2})\\/(\\w{3})\\/(\\d{4}):(\\d{2}):(\\d{2}):(\\d{2})\\s*([+-]\\d{4})?/);
      if (apacheMatch) {
        const [, day, month, year, hour, minute, second, timezone] = apacheMatch;
        
        // 月份映射
        const monthMap = {
          'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3,
          'May': 4, 'Jun': 5, 'Jul': 6, 'Aug': 7,
          'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
        };
        
        const monthNum = monthMap[month] !== undefined ? monthMap[month] : 0;
        
        // ✅ 保存原始时间，不做时区转换
        return new Date(
          parseInt(year, 10),
          monthNum,
          parseInt(day, 10),
          parseInt(hour, 10),
          parseInt(minute, 10),
          parseInt(second, 10)
        );
      }
    }
    
    // 回退到默认解析
    const date = new Date(cleaned);
    return isNaN(date.getTime()) ? new Date() : date;
  } catch (e) {
    return new Date();
  }
}

function parseIISTimestamp(timestamp) {
  try {
    const date = new Date(timestamp);
    return isNaN(date.getTime()) ? new Date() : date;
  } catch (e) {
    return new Date();
  }
}

function determineThreatLevel(statusCode, path, userAgent) {
  if (statusCode >= 500) return ThreatLevel.HIGH;
  if (statusCode >= 400) return ThreatLevel.MEDIUM;
  
  const suspiciousPatterns = [
    '/admin', '/wp-admin', '/.env', '/config', '/api/v1',
    'script', 'alert', 'union', 'select', 'drop', 'delete',
    'exec', 'cmd', 'eval', 'system'
  ];
  
  const pathLower = (path || '').toLowerCase();
  const userAgentLower = (userAgent || '').toLowerCase();
  
  for (const pattern of suspiciousPatterns) {
    if (pathLower.includes(pattern) || userAgentLower.includes(pattern)) {
      return ThreatLevel.HIGH;
    }
  }
  
  if (pathLower.includes('..') || pathLower.includes('<script')) {
    return ThreatLevel.CRITICAL;
  }
  
  return ThreatLevel.LOW;
}

function detectThreats(line, path, userAgent) {
  const threats = [];
  const content = (line || '') + ' ' + (path || '') + ' ' + (userAgent || '');
  const contentLower = content.toLowerCase();
  
  // SQL注入检测
  if (contentLower.match(/(union\\s+select|'\\s*or\\s*'|drop\\s+table|delete\\s+from|insert\\s+into)/)) {
    threats.push('SQL注入');
  }
  
  // XSS攻击检测
  if (contentLower.match(/(<script|javascript:|on\\w+\\s*=|alert\\s*\\()/)) {
    threats.push('XSS攻击');
  }
  
  // 路径遍历检测
  if (contentLower.match(/(\\.\\.[\\/\\\\]|%2e%2e%2f|%2e%2e%5c)/)) {
    threats.push('路径遍历');
  }
  
  // 命令注入检测
  if (contentLower.match(/(cmd\\.exe|system\\s*\\(|exec\\s*\\(|eval\\s*\\()/)) {
    threats.push('命令注入');
  }
  
  // 文件包含检测
  if (contentLower.match(/(etc\\/passwd|boot\\.ini|win\\.ini|phpinfo\\s*\\()/)) {
    threats.push('文件包含');
  }
  
  // 扫描器检测
  if (contentLower.match(/(nmap|nikto|sqlmap|burp|scanner|bot|crawler)/)) {
    threats.push('扫描器');
  }
  
  return threats;
}
`;
  }
  async getWorkerCode() {
    try {
      const response = await fetch(new URL("" + new URL("parseWorker--PV_UxW-.ts", import.meta.url).href, import.meta.url));
      if (response.ok) {
        return await response.text();
      } else {
        throw new Error("Failed to fetch worker file");
      }
    } catch (error) {
      console.warn("[WorkerManager] Failed to fetch worker file, using inline code:", error);
      return this.getInlineWorkerCode();
    }
  }
  splitIntoChunks(content, dataMode = "local", isLargeFile = false) {
    const lines = content.split("\n");
    const chunks = [];
    const totalLines = lines.length;
    const fileSizeBytes = new Blob([content]).size;
    let chunkSizeLines;
    if (dataMode === "local") {
      if (isLargeFile && fileSizeBytes > 200 * 1024 * 1024) {
        chunkSizeLines = 2e3;
        console.log("[WorkerManager] Large file optimization: using 2000 lines per chunk");
      } else if (fileSizeBytes > 100 * 1024 * 1024) {
        chunkSizeLines = 1500;
      } else if (fileSizeBytes > 50 * 1024 * 1024) {
        chunkSizeLines = 1e3;
      } else if (fileSizeBytes > 20 * 1024 * 1024) {
        chunkSizeLines = 800;
      } else if (fileSizeBytes > 5 * 1024 * 1024) {
        chunkSizeLines = 1e3;
      } else {
        chunkSizeLines = 2e3;
      }
    } else {
      if (isLargeFile) {
        chunkSizeLines = Math.min(1e3, Math.max(500, Math.floor(totalLines / (this.maxWorkers * 4))));
        console.log("[WorkerManager] Large file IndexedDB mode: using conservative chunk size:", chunkSizeLines);
      } else if (fileSizeBytes > 100 * 1024 * 1024) {
        chunkSizeLines = Math.min(1e4, Math.max(5e3, Math.floor(totalLines / this.maxWorkers)));
      } else if (totalLines > 1e5) {
        chunkSizeLines = Math.min(5e3, Math.max(2e3, Math.floor(totalLines / this.maxWorkers)));
      } else {
        chunkSizeLines = Math.min(3e3, Math.max(1e3, Math.floor(totalLines / this.maxWorkers)));
      }
    }
    for (let i = 0; i < lines.length; i += chunkSizeLines) {
      const chunkLines = lines.slice(i, i + chunkSizeLines);
      if (chunkLines.length > 0) {
        chunks.push({
          content: chunkLines.join("\n"),
          startLine: i + 1
        });
      }
    }
    console.log(`[WorkerManager] Created ${chunks.length} chunks with size ${chunkSizeLines} lines for ${dataMode} mode${isLargeFile ? " (large file mode)" : ""}`);
    return chunks;
  }
  async createTask(content, startLine, format, timeoutMs) {
    return new Promise((resolve, reject) => {
      const taskId = `task-${++this.taskCounter}`;
      const task = {
        id: taskId,
        content,
        startLine,
        format,
        timeoutMs,
        resolve,
        reject
      };
      const availableWorker = this.findAvailableWorker();
      this.assignTaskToWorker(availableWorker, task);
    });
  }
  findAvailableWorker() {
    const idleWorker = this.workerPool.find((item) => !item.busy);
    if (idleWorker) {
      return idleWorker;
    }
    return this.workerPool.reduce(
      (shortest, current) => current.taskQueue.length < shortest.taskQueue.length ? current : shortest
    );
  }
  assignTaskToWorker(workerItem, task) {
    if (!workerItem.busy) {
      this.executeTask(workerItem, task);
    } else {
      workerItem.taskQueue.push(task);
    }
  }
  executeTask(workerItem, task) {
    workerItem.busy = true;
    const timeoutId = setTimeout(() => {
      task.reject(new Error(`Task ${task.id} timed out after ${this.largeFileConfig.workerTimeout / 1e3} seconds`));
      this.handleTaskComplete(workerItem);
    }, task.timeoutMs || this.largeFileConfig.workerTimeout);
    const messageHandler = (event) => {
      clearTimeout(timeoutId);
      workerItem.worker.removeEventListener("message", messageHandler);
      workerItem.worker.removeEventListener("error", errorHandler);
      if (event.data.error) {
        task.reject(new Error(event.data.error));
      } else {
        task.resolve(event.data);
        this.completedTasks++;
        if (this.onProgress) {
          this.onProgress(this.completedTasks, this.totalTasks);
        }
      }
      this.handleTaskComplete(workerItem);
    };
    const errorHandler = (error) => {
      clearTimeout(timeoutId);
      workerItem.worker.removeEventListener("message", messageHandler);
      workerItem.worker.removeEventListener("error", errorHandler);
      task.reject(new Error(`Worker error: ${error.message}`));
      this.handleTaskComplete(workerItem);
    };
    workerItem.worker.addEventListener("message", messageHandler);
    workerItem.worker.addEventListener("error", errorHandler);
    workerItem.worker.postMessage({
      id: task.id,
      chunk: task.content,
      startLine: task.startLine,
      format: task.format
    });
  }
  handleTaskComplete(workerItem) {
    workerItem.busy = false;
    if (workerItem.taskQueue.length > 0) {
      const nextTask = workerItem.taskQueue.shift();
      this.executeTask(workerItem, nextTask);
    }
  }
  mergeResults(results) {
    const mergedEntries = [];
    const mergedErrors = [];
    let totalProcessedLines = 0;
    results.sort((a, b) => {
      const aId = a.entries[0]?.id || "0";
      const bId = b.entries[0]?.id || "0";
      return parseInt(aId.split("-")[1] || "0") - parseInt(bId.split("-")[1] || "0");
    });
    for (const result of results) {
      mergedEntries.push(...result.entries);
      mergedErrors.push(...result.errors);
      totalProcessedLines += result.processedLines;
    }
    return {
      entries: mergedEntries,
      errors: mergedErrors,
      processedLines: totalProcessedLines
    };
  }
  // 优雅关闭 Worker 池
  async cleanup() {
    const terminatePromises = this.workerPool.map(async (item) => {
      if (item.worker) {
        item.worker.terminate();
      }
    });
    await Promise.all(terminatePromises);
    this.workerPool = [];
    console.log("[WorkerManager] Worker pool cleaned up");
  }
  // 获取 Worker 池状态
  getPoolStatus() {
    return {
      totalWorkers: this.workerPool.length,
      busyWorkers: this.workerPool.filter((item) => item.busy).length,
      queuedTasks: this.workerPool.reduce((total, item) => total + item.taskQueue.length, 0)
    };
  }
  // 更新文件大小限制
  updateLimits(newLimits) {
    this.limits = { ...this.limits, ...newLimits };
  }
  // 获取当前限制
  getLimits() {
    return { ...this.limits };
  }
  // 执行内存维护（仅在超大文件模式下）
  async performMemoryMaintenance() {
    if (window.__LARGE_FILE_MODE) {
      console.log("[WorkerManager] Performing memory maintenance for large file mode...");
      if (typeof window !== "undefined" && window.gc) {
        window.gc();
      }
      await new Promise((resolve) => setTimeout(resolve, this.largeFileConfig.memoryCheckInterval));
      console.log("[WorkerManager] Memory maintenance complete.");
    }
  }
}
const _hoisted_1$7 = { class: "space-y-4" };
const _hoisted_2$7 = ["disabled"];
const _hoisted_3$7 = { class: "flex items-center gap-3" };
const _hoisted_4$7 = { class: "flex-1 min-w-0" };
const _hoisted_5$7 = { class: "text-white truncate" };
const _hoisted_6$7 = { class: "text-gray-400 text-sm" };
const _hoisted_7$6 = ["disabled"];
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "FileUploadArea",
  props: {
    uploadedFile: {},
    isLoading: { type: Boolean }
  },
  emits: ["file-selected", "file-removed"],
  setup(__props, { emit: __emit }) {
    const themeStore = useThemeStore();
    const props = __props;
    const emit = __emit;
    const isDragging = ref(false);
    const fileSize = computed(() => {
      if (!props.uploadedFile) return 0;
      return props.uploadedFile.size;
    });
    function handleDragOver(e) {
      e.preventDefault();
      isDragging.value = true;
    }
    function handleDragLeave() {
      isDragging.value = false;
    }
    function handleDrop(e) {
      e.preventDefault();
      isDragging.value = false;
      const files = e.dataTransfer?.files;
      if (files?.length) {
        emit("file-selected", files[0]);
      }
    }
    function handleFileInput(e) {
      const files = e.target.files;
      if (files?.length) {
        emit("file-selected", files[0]);
      }
    }
    function formatBytes(bytes) {
      if (bytes === 0) return "0 B";
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        _cache[6] || (_cache[6] = createBaseVNode("h3", { class: "text-lg font-semibold text-white" }, "文件上传", -1)),
        createBaseVNode("div", {
          onDragover: handleDragOver,
          onDragleave: handleDragLeave,
          onDrop: handleDrop,
          class: normalizeClass([
            "border-2 border-dashed rounded-xl p-6 text-center transition-colors",
            isDragging.value ? "border-blue-400 bg-blue-400/10" : "border-white/20 hover:border-white/30"
          ])
        }, [
          _cache[1] || (_cache[1] = createBaseVNode("i", { class: "pi pi-cloud-upload text-3xl text-gray-400 mb-3" }, null, -1)),
          _cache[2] || (_cache[2] = createBaseVNode("p", { class: "text-white mb-2" }, "拖拽文件到此处", -1)),
          _cache[3] || (_cache[3] = createBaseVNode("p", { class: "text-gray-400 text-sm mb-4" }, "支持 .log, .txt 等文本文件", -1)),
          createBaseVNode("input", {
            type: "file",
            accept: ".log,.txt,.csv",
            onChange: handleFileInput,
            class: "hidden",
            id: "fileInput",
            disabled: _ctx.isLoading
          }, null, 40, _hoisted_2$7),
          createBaseVNode("label", {
            for: "fileInput",
            class: normalizeClass([
              "inline-block px-4 py-2 rounded-lg cursor-pointer transition-colors",
              _ctx.isLoading ? "bg-gray-500 text-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"
            ])
          }, " 选择文件 ", 2)
        ], 34),
        _ctx.uploadedFile ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["p-3 rounded-lg", unref(themeStore).themeClasses.cardBackground])
        }, [
          createBaseVNode("div", _hoisted_3$7, [
            _cache[5] || (_cache[5] = createBaseVNode("i", { class: "pi pi-file text-blue-400" }, null, -1)),
            createBaseVNode("div", _hoisted_4$7, [
              createBaseVNode("p", _hoisted_5$7, toDisplayString(_ctx.uploadedFile.name), 1),
              createBaseVNode("p", _hoisted_6$7, toDisplayString(formatBytes(fileSize.value)), 1)
            ]),
            createBaseVNode("button", {
              onClick: _cache[0] || (_cache[0] = ($event) => emit("file-removed")),
              class: "text-gray-400 hover:text-red-400 transition-colors",
              disabled: _ctx.isLoading
            }, _cache[4] || (_cache[4] = [
              createBaseVNode("i", { class: "pi pi-times" }, null, -1)
            ]), 8, _hoisted_7$6)
          ])
        ], 2)) : createCommentVNode("", true)
      ]);
    };
  }
});
const _hoisted_1$6 = { class: "space-y-4" };
const _hoisted_2$6 = { class: "space-y-2" };
const _hoisted_3$6 = ["value", "disabled"];
const _hoisted_4$6 = ["value"];
const _hoisted_5$6 = ["disabled"];
const _hoisted_6$6 = {
  key: 0,
  class: "pi pi-spin pi-spinner mr-2"
};
const _hoisted_7$5 = {
  key: 1,
  class: "pi pi-download mr-2"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ExampleSelector",
  props: {
    selectedExample: {},
    isLoading: { type: Boolean }
  },
  emits: ["update:selectedExample", "import-example"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const exampleFiles = [
      { label: "测试示例", file: "test.log" }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        _cache[2] || (_cache[2] = createBaseVNode("h3", { class: "text-lg font-semibold text-white" }, "示例文件", -1)),
        createBaseVNode("div", _hoisted_2$6, [
          createBaseVNode("select", {
            value: _ctx.selectedExample,
            onInput: _cache[0] || (_cache[0] = ($event) => emit("update:selectedExample", $event.target.value)),
            class: "w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-green-500 focus:outline-none",
            disabled: _ctx.isLoading
          }, [
            (openBlock(), createElementBlock(Fragment, null, renderList(exampleFiles, (example) => {
              return createBaseVNode("option", {
                key: example.file,
                value: example.file
              }, toDisplayString(example.label), 9, _hoisted_4$6);
            }), 64))
          ], 40, _hoisted_3$6),
          createBaseVNode("button", {
            onClick: _cache[1] || (_cache[1] = ($event) => emit("import-example")),
            disabled: _ctx.isLoading,
            class: normalizeClass([
              "w-full px-4 py-2 rounded-lg transition-colors",
              _ctx.isLoading ? "bg-gray-500 text-gray-300 cursor-not-allowed" : "bg-green-500 hover:bg-green-600 text-white"
            ])
          }, [
            _ctx.isLoading ? (openBlock(), createElementBlock("i", _hoisted_6$6)) : (openBlock(), createElementBlock("i", _hoisted_7$5)),
            createTextVNode(" " + toDisplayString(_ctx.isLoading ? "导入中..." : "导入示例"), 1)
          ], 10, _hoisted_5$6)
        ])
      ]);
    };
  }
});
const _hoisted_1$5 = { class: "space-y-4" };
const _hoisted_2$5 = ["value", "disabled"];
const _hoisted_3$5 = ["disabled"];
const _hoisted_4$5 = {
  key: 0,
  class: "pi pi-spin pi-spinner mr-2"
};
const _hoisted_5$5 = {
  key: 1,
  class: "pi pi-paste mr-2"
};
const _hoisted_6$5 = {
  key: 0,
  class: "text-sm text-gray-400"
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TextPasteArea",
  props: {
    pastedText: {},
    isLoading: { type: Boolean }
  },
  emits: ["update:pastedText", "import-text"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const hasText = computed(() => props.pastedText.trim().length > 0);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        _cache[2] || (_cache[2] = createBaseVNode("h3", { class: "text-lg font-semibold text-white" }, "粘贴文本", -1)),
        createBaseVNode("textarea", {
          value: _ctx.pastedText,
          onInput: _cache[0] || (_cache[0] = ($event) => emit("update:pastedText", $event.target.value)),
          placeholder: "粘贴日志内容...",
          rows: "8",
          class: "w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 resize-none focus:border-purple-500 focus:outline-none",
          disabled: _ctx.isLoading
        }, null, 40, _hoisted_2$5),
        createBaseVNode("button", {
          onClick: _cache[1] || (_cache[1] = ($event) => emit("import-text")),
          disabled: _ctx.isLoading || !hasText.value,
          class: normalizeClass([
            "w-full px-4 py-2 rounded-lg transition-colors",
            _ctx.isLoading || !hasText.value ? "bg-gray-500 text-gray-300 cursor-not-allowed" : "bg-purple-500 hover:bg-purple-600 text-white"
          ])
        }, [
          _ctx.isLoading ? (openBlock(), createElementBlock("i", _hoisted_4$5)) : (openBlock(), createElementBlock("i", _hoisted_5$5)),
          createTextVNode(" " + toDisplayString(_ctx.isLoading ? "导入中..." : "导入文本"), 1)
        ], 10, _hoisted_3$5),
        hasText.value && !_ctx.isLoading ? (openBlock(), createElementBlock("div", _hoisted_6$5, " 共 " + toDisplayString(_ctx.pastedText.split("\n").length) + " 行文本 ", 1)) : createCommentVNode("", true)
      ]);
    };
  }
});
const _hoisted_1$4 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" };
const _hoisted_2$4 = ["value", "disabled"];
const _hoisted_3$4 = ["value"];
const _hoisted_4$4 = ["value"];
const _hoisted_5$4 = ["value"];
const _hoisted_6$4 = ["value"];
const _hoisted_7$4 = ["value"];
const _hoisted_8$4 = ["value"];
const _hoisted_9$2 = ["value"];
const _hoisted_10$2 = ["value"];
const _hoisted_11$2 = { class: "flex items-center gap-2 text-white cursor-pointer" };
const _hoisted_12$2 = ["checked"];
const _hoisted_13$2 = { class: "flex items-center gap-2 text-white cursor-pointer" };
const _hoisted_14$1 = ["checked"];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "FormatConfig",
  props: {
    selectedFormat: {},
    useAutoDetection: { type: Boolean },
    clearBeforeImport: { type: Boolean },
    timezoneOffset: {}
  },
  emits: ["update:selectedFormat", "update:useAutoDetection", "update:clearBeforeImport", "update:timezoneOffset"],
  setup(__props, { emit: __emit }) {
    const themeStore = useThemeStore();
    const emit = __emit;
    function getFormatLabel(format) {
      const labels = {
        [LogFormat.AUTO]: "自动检测",
        [LogFormat.APACHE]: "Apache",
        [LogFormat.NGINX]: "Nginx",
        [LogFormat.IIS]: "IIS",
        [LogFormat.TOMCAT]: "Tomcat",
        [LogFormat.GENERIC]: "通用格式"
      };
      return labels[format] || "未知格式";
    }
    const timezoneOptions = [
      { value: 0, label: "保持原始时间（默认）" },
      { value: 480, label: "转换为 UTC+8 (北京时间)" },
      { value: 420, label: "转换为 UTC+7 (越南)" },
      { value: 360, label: "转换为 UTC+6 (孟加拉)" },
      { value: 300, label: "转换为 UTC+5 (巴基斯坦)" },
      { value: 240, label: "转换为 UTC+4 (阿联酋)" },
      { value: 180, label: "转换为 UTC+3 (莫斯科)" },
      { value: 120, label: "转换为 UTC+2 (开罗)" },
      { value: 60, label: "转换为 UTC+1 (柏林)" },
      { value: 0, label: "转换为 UTC+0 (伦敦/UTC)" },
      { value: -60, label: "转换为 UTC-1 (亚速尔群岛)" },
      { value: -120, label: "转换为 UTC-2 (大西洋中部)" },
      { value: -180, label: "转换为 UTC-3 (圣保罗)" },
      { value: -240, label: "转换为 UTC-4 (纽约 DST)" },
      { value: -300, label: "转换为 UTC-5 (纽约)" },
      { value: -360, label: "转换为 UTC-6 (芝加哥)" },
      { value: -420, label: "转换为 UTC-7 (丹佛)" },
      { value: -480, label: "转换为 UTC-8 (洛杉矶)" },
      { value: -540, label: "转换为 UTC-9 (阿拉斯加)" },
      { value: -600, label: "转换为 UTC-10 (夏威夷)" }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["p-4 rounded-xl space-y-4", unref(themeStore).themeClasses.cardBackground])
      }, [
        _cache[10] || (_cache[10] = createBaseVNode("h3", { class: "text-lg font-semibold text-white" }, "解析配置", -1)),
        createBaseVNode("div", _hoisted_1$4, [
          createBaseVNode("div", null, [
            _cache[4] || (_cache[4] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-2" }, "日志格式", -1)),
            createBaseVNode("select", {
              value: _ctx.selectedFormat,
              onInput: _cache[0] || (_cache[0] = ($event) => emit("update:selectedFormat", $event.target.value)),
              disabled: _ctx.useAutoDetection,
              class: "w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white disabled:opacity-50 focus:border-blue-500 focus:outline-none"
            }, [
              createBaseVNode("option", {
                value: unref(LogFormat).AUTO
              }, toDisplayString(getFormatLabel(unref(LogFormat).AUTO)), 9, _hoisted_3$4),
              createBaseVNode("option", {
                value: unref(LogFormat).APACHE
              }, toDisplayString(getFormatLabel(unref(LogFormat).APACHE)), 9, _hoisted_4$4),
              createBaseVNode("option", {
                value: unref(LogFormat).NGINX
              }, toDisplayString(getFormatLabel(unref(LogFormat).NGINX)), 9, _hoisted_5$4),
              createBaseVNode("option", {
                value: unref(LogFormat).IIS
              }, toDisplayString(getFormatLabel(unref(LogFormat).IIS)), 9, _hoisted_6$4),
              createBaseVNode("option", {
                value: unref(LogFormat).TOMCAT
              }, toDisplayString(getFormatLabel(unref(LogFormat).TOMCAT)), 9, _hoisted_7$4),
              createBaseVNode("option", {
                value: unref(LogFormat).GENERIC
              }, toDisplayString(getFormatLabel(unref(LogFormat).GENERIC)), 9, _hoisted_8$4)
            ], 40, _hoisted_2$4)
          ]),
          createBaseVNode("div", null, [
            _cache[5] || (_cache[5] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-2" }, [
              createTextVNode(" 时区设置 "),
              createBaseVNode("i", {
                class: "pi pi-info-circle text-xs ml-1",
                title: "选择日志记录的时区，默认保持原始时间"
              })
            ], -1)),
            createBaseVNode("select", {
              value: _ctx.timezoneOffset ?? 0,
              onInput: _cache[1] || (_cache[1] = ($event) => emit("update:timezoneOffset", Number($event.target.value))),
              class: "w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-blue-500 focus:outline-none"
            }, [
              (openBlock(), createElementBlock(Fragment, null, renderList(timezoneOptions, (tz) => {
                return createBaseVNode("option", {
                  key: tz.value,
                  value: tz.value
                }, toDisplayString(tz.label), 9, _hoisted_10$2);
              }), 64))
            ], 40, _hoisted_9$2)
          ]),
          createBaseVNode("div", null, [
            _cache[7] || (_cache[7] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-2" }, "导入选项", -1)),
            createBaseVNode("label", _hoisted_11$2, [
              createBaseVNode("input", {
                type: "checkbox",
                checked: _ctx.useAutoDetection,
                onInput: _cache[2] || (_cache[2] = ($event) => emit("update:useAutoDetection", $event.target.checked)),
                class: "rounded border-white/20 bg-white/10 text-blue-500 focus:ring-blue-500 focus:ring-2"
              }, null, 40, _hoisted_12$2),
              _cache[6] || (_cache[6] = createTextVNode(" 自动检测格式 "))
            ])
          ]),
          createBaseVNode("div", null, [
            _cache[9] || (_cache[9] = createBaseVNode("label", { class: "block text-sm text-gray-400 mb-2" }, "数据处理", -1)),
            createBaseVNode("label", _hoisted_13$2, [
              createBaseVNode("input", {
                type: "checkbox",
                checked: _ctx.clearBeforeImport,
                onInput: _cache[3] || (_cache[3] = ($event) => emit("update:clearBeforeImport", $event.target.checked)),
                class: "rounded border-white/20 bg-white/10 text-red-500 focus:ring-red-500 focus:ring-2"
              }, null, 40, _hoisted_14$1),
              _cache[8] || (_cache[8] = createTextVNode(" 导入前清空数据 "))
            ])
          ])
        ])
      ], 2);
    };
  }
});
const _hoisted_1$3 = { class: "flex items-center justify-between mb-3" };
const _hoisted_2$3 = { class: "w-full bg-gray-700 rounded-full h-3 mb-4 overflow-hidden" };
const _hoisted_3$3 = { class: "grid grid-cols-2 md:grid-cols-4 gap-4 text-sm" };
const _hoisted_4$3 = { class: "text-center" };
const _hoisted_5$3 = { class: "text-white font-medium" };
const _hoisted_6$3 = {
  key: 0,
  class: "text-center"
};
const _hoisted_7$3 = { class: "text-white font-medium" };
const _hoisted_8$3 = {
  key: 1,
  class: "text-center"
};
const _hoisted_9$1 = { class: "text-white font-medium" };
const _hoisted_10$1 = {
  key: 2,
  class: "text-center"
};
const _hoisted_11$1 = { class: "text-white font-medium" };
const _hoisted_12$1 = {
  key: 3,
  class: "text-center"
};
const _hoisted_13$1 = { class: "text-white font-medium" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ProgressDisplay",
  props: {
    isLoading: { type: Boolean },
    parseStage: {},
    parseProgress: {},
    storingProgress: {}
  },
  setup(__props) {
    const themeStore = useThemeStore();
    function getStageLabel(stage) {
      const labels = {
        "format-detection": "格式检测",
        "parsing": "解析数据",
        "storing": "存储数据",
        "completed": "导入完成"
      };
      return labels[stage] || stage;
    }
    function getStageColor(stage) {
      const colors = {
        "format-detection": "text-yellow-400",
        "parsing": "text-blue-400",
        "storing": "text-purple-400",
        "completed": "text-green-400"
      };
      return colors[stage] || "text-gray-400";
    }
    return (_ctx, _cache) => {
      return _ctx.isLoading ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["p-4 rounded-xl", unref(themeStore).themeClasses.cardBackground])
      }, [
        createBaseVNode("div", _hoisted_1$3, [
          _cache[1] || (_cache[1] = createBaseVNode("h3", { class: "text-lg font-semibold text-white" }, "正在处理...", -1)),
          createBaseVNode("span", {
            class: normalizeClass(["text-sm font-medium", getStageColor(_ctx.parseStage)])
          }, [
            _cache[0] || (_cache[0] = createBaseVNode("i", { class: "pi pi-spin pi-spinner mr-1" }, null, -1)),
            createTextVNode(" " + toDisplayString(getStageLabel(_ctx.parseStage)), 1)
          ], 2)
        ]),
        createBaseVNode("div", _hoisted_2$3, [
          createBaseVNode("div", {
            class: "h-3 rounded-full transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500",
            style: normalizeStyle({ width: _ctx.parseProgress.percentage + "%" })
          }, null, 4)
        ]),
        createBaseVNode("div", _hoisted_3$3, [
          createBaseVNode("div", _hoisted_4$3, [
            createBaseVNode("div", _hoisted_5$3, toDisplayString(_ctx.parseProgress.percentage) + "%", 1),
            _cache[2] || (_cache[2] = createBaseVNode("div", { class: "text-gray-400" }, "总进度", -1))
          ]),
          _ctx.parseStage === "storing" && _ctx.storingProgress && _ctx.storingProgress.total > 0 ? (openBlock(), createElementBlock("div", _hoisted_6$3, [
            createBaseVNode("div", _hoisted_7$3, toDisplayString(_ctx.storingProgress.processed.toLocaleString()) + "/" + toDisplayString(_ctx.storingProgress.total.toLocaleString()), 1),
            _cache[3] || (_cache[3] = createBaseVNode("div", { class: "text-gray-400" }, "存储条目", -1))
          ])) : _ctx.parseProgress.totalChunks > 0 ? (openBlock(), createElementBlock("div", _hoisted_8$3, [
            createBaseVNode("div", _hoisted_9$1, toDisplayString(_ctx.parseProgress.currentChunk) + "/" + toDisplayString(_ctx.parseProgress.totalChunks), 1),
            _cache[4] || (_cache[4] = createBaseVNode("div", { class: "text-gray-400" }, "处理块", -1))
          ])) : createCommentVNode("", true),
          _ctx.parseProgress.totalLines > 0 ? (openBlock(), createElementBlock("div", _hoisted_10$1, [
            createBaseVNode("div", _hoisted_11$1, toDisplayString(_ctx.parseProgress.totalLines.toLocaleString()), 1),
            _cache[5] || (_cache[5] = createBaseVNode("div", { class: "text-gray-400" }, "总行数", -1))
          ])) : createCommentVNode("", true),
          _ctx.parseProgress.processedLines > 0 ? (openBlock(), createElementBlock("div", _hoisted_12$1, [
            createBaseVNode("div", _hoisted_13$1, toDisplayString(_ctx.parseProgress.processedLines.toLocaleString()), 1),
            _cache[6] || (_cache[6] = createBaseVNode("div", { class: "text-gray-400" }, "已处理", -1))
          ])) : createCommentVNode("", true)
        ])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$2 = { class: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-4" };
const _hoisted_2$2 = { class: "text-center p-4 bg-white/10 rounded-lg" };
const _hoisted_3$2 = { class: "text-2xl font-bold text-green-400" };
const _hoisted_4$2 = { class: "text-center p-4 bg-white/10 rounded-lg" };
const _hoisted_5$2 = { class: "text-2xl font-bold text-blue-400" };
const _hoisted_6$2 = { class: "text-center p-4 bg-white/10 rounded-lg" };
const _hoisted_7$2 = { class: "text-lg font-bold text-purple-400 truncate" };
const _hoisted_8$2 = { class: "text-center p-4 bg-white/10 rounded-lg" };
const _hoisted_9 = { class: "text-2xl font-bold text-yellow-400" };
const _hoisted_10 = {
  key: 0,
  class: "mb-4"
};
const _hoisted_11 = { class: "flex items-center gap-2 mb-2" };
const _hoisted_12 = { class: "text-white font-medium" };
const _hoisted_13 = {
  key: 0,
  class: "text-gray-400 text-sm"
};
const _hoisted_14 = { class: "flex gap-3" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ResultDisplay",
  props: {
    parseResult: {}
  },
  emits: ["go-to-logs", "clear-all"],
  setup(__props, { emit: __emit }) {
    const themeStore = useThemeStore();
    const emit = __emit;
    function getFormatLabel(format) {
      const labels = {
        [LogFormat.APACHE]: "Apache 访问日志",
        [LogFormat.NGINX]: "Nginx 访问日志",
        [LogFormat.IIS]: "IIS 访问日志",
        [LogFormat.TOMCAT]: "Tomcat 访问日志",
        [LogFormat.GENERIC]: "通用格式",
        [LogFormat.AUTO]: "自动检测"
      };
      return labels[format] || "未知格式";
    }
    return (_ctx, _cache) => {
      return _ctx.parseResult ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["p-4 rounded-xl", unref(themeStore).themeClasses.cardBackground])
      }, [
        _cache[9] || (_cache[9] = createBaseVNode("h3", { class: "text-lg font-semibold text-white mb-4" }, [
          createBaseVNode("i", { class: "pi pi-check-circle text-green-400 mr-2" }),
          createTextVNode(" 解析完成 ")
        ], -1)),
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("div", _hoisted_2$2, [
            createBaseVNode("div", _hoisted_3$2, toDisplayString(_ctx.parseResult.validLines.toLocaleString()), 1),
            _cache[2] || (_cache[2] = createBaseVNode("div", { class: "text-sm text-gray-400" }, "有效记录", -1))
          ]),
          createBaseVNode("div", _hoisted_4$2, [
            createBaseVNode("div", _hoisted_5$2, toDisplayString(_ctx.parseResult.totalLines.toLocaleString()), 1),
            _cache[3] || (_cache[3] = createBaseVNode("div", { class: "text-sm text-gray-400" }, "总行数", -1))
          ]),
          createBaseVNode("div", _hoisted_6$2, [
            createBaseVNode("div", _hoisted_7$2, toDisplayString(getFormatLabel(_ctx.parseResult.detectedFormat)), 1),
            _cache[4] || (_cache[4] = createBaseVNode("div", { class: "text-sm text-gray-400" }, "检测格式", -1))
          ]),
          createBaseVNode("div", _hoisted_8$2, [
            createBaseVNode("div", _hoisted_9, toDisplayString(Math.round(_ctx.parseResult.confidence * 100)) + "% ", 1),
            _cache[5] || (_cache[5] = createBaseVNode("div", { class: "text-sm text-gray-400" }, "置信度", -1))
          ])
        ]),
        _ctx.parseResult.errors.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_10, [
          createBaseVNode("div", _hoisted_11, [
            _cache[6] || (_cache[6] = createBaseVNode("i", { class: "pi pi-exclamation-triangle text-yellow-400" }, null, -1)),
            createBaseVNode("h4", _hoisted_12, "解析错误 (" + toDisplayString(_ctx.parseResult.errors.length) + ")", 1)
          ]),
          createBaseVNode("div", {
            class: normalizeClass(["max-h-32 overflow-y-auto rounded-lg p-3", unref(themeStore).themeClasses.cardBackground])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.parseResult.errors.slice(0, 10), (error, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: "text-red-400 text-sm mb-1"
              }, toDisplayString(error), 1);
            }), 128)),
            _ctx.parseResult.errors.length > 10 ? (openBlock(), createElementBlock("div", _hoisted_13, " ... 还有 " + toDisplayString(_ctx.parseResult.errors.length - 10) + " 个错误 ", 1)) : createCommentVNode("", true)
          ], 2)
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_14, [
          createBaseVNode("button", {
            onClick: _cache[0] || (_cache[0] = ($event) => emit("go-to-logs")),
            class: "flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
          }, _cache[7] || (_cache[7] = [
            createBaseVNode("i", { class: "pi pi-eye" }, null, -1),
            createTextVNode(" 查看日志 ")
          ])),
          createBaseVNode("button", {
            onClick: _cache[1] || (_cache[1] = ($event) => emit("clear-all")),
            class: "flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
          }, _cache[8] || (_cache[8] = [
            createBaseVNode("i", { class: "pi pi-refresh" }, null, -1),
            createTextVNode(" 重新导入 ")
          ]))
        ])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$1 = { class: "bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4" };
const _hoisted_2$1 = { class: "flex items-center justify-between" };
const _hoisted_3$1 = { class: "flex items-center space-x-3" };
const _hoisted_4$1 = { class: "text-white/80 text-sm" };
const _hoisted_5$1 = { class: "p-6 space-y-6 max-h-[calc(90vh-140px)] overflow-y-auto" };
const _hoisted_6$1 = { class: "bg-blue-500/10 border border-blue-500/30 rounded-lg p-4" };
const _hoisted_7$1 = { class: "text-center" };
const _hoisted_8$1 = { class: "text-3xl font-bold text-blue-400 mb-2" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LargeDatasetWarningDialog",
  props: {
    visible: { type: Boolean },
    totalEntries: {}
  },
  emits: ["confirm", "cancel"],
  setup(__props, { emit: __emit }) {
    const themeStore = useThemeStore();
    const props = __props;
    const emit = __emit;
    const entryCount = computed(() => props.totalEntries.toLocaleString());
    computed(() => Math.ceil(props.totalEntries / 1e4));
    computed(() => Math.ceil(props.totalEntries / 5e4));
    function handleConfirm() {
      emit("confirm");
    }
    function handleCancel() {
      emit("cancel");
    }
    function handleBackdropClick() {
      emit("cancel");
    }
    return (_ctx, _cache) => {
      return _ctx.visible ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50",
        onClick: handleBackdropClick
      }, [
        createBaseVNode("div", {
          class: normalizeClass(["rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden", unref(themeStore).themeClasses.cardBackground]),
          onClick: _cache[0] || (_cache[0] = withModifiers(() => {
          }, ["stop"]))
        }, [
          createBaseVNode("div", _hoisted_1$1, [
            createBaseVNode("div", _hoisted_2$1, [
              createBaseVNode("div", _hoisted_3$1, [
                _cache[2] || (_cache[2] = createBaseVNode("div", { class: "w-8 h-8 rounded-full bg-white/20 flex items-center justify-center" }, [
                  createBaseVNode("svg", {
                    class: "w-5 h-5 text-white",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    createBaseVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                    })
                  ])
                ], -1)),
                createBaseVNode("div", null, [
                  _cache[1] || (_cache[1] = createBaseVNode("h3", { class: "text-xl font-bold text-white" }, "检测到超大数据集", -1)),
                  createBaseVNode("p", _hoisted_4$1, toDisplayString(entryCount.value) + " 条记录", 1)
                ])
              ]),
              createBaseVNode("button", {
                onClick: handleCancel,
                class: "text-white/60 hover:text-white transition-colors p-1"
              }, _cache[3] || (_cache[3] = [
                createBaseVNode("svg", {
                  class: "w-6 h-6",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M6 18L18 6M6 6l12 12"
                  })
                ], -1)
              ]))
            ])
          ]),
          createBaseVNode("div", _hoisted_5$1, [
            _cache[6] || (_cache[6] = createBaseVNode("div", { class: "bg-orange-500/10 border border-orange-500/30 rounded-lg p-4" }, [
              createBaseVNode("h4", { class: "text-orange-300 font-semibold mb-2" }, "内存模式限制警告"),
              createBaseVNode("p", { class: "text-orange-200 text-sm" }, " 当前版本在内存模式下暂未完全优化超过100万条的日志导入设计 ")
            ], -1)),
            createBaseVNode("div", _hoisted_6$1, [
              _cache[5] || (_cache[5] = createBaseVNode("h4", { class: "text-blue-300 font-semibold mb-3 flex items-center" }, [
                createBaseVNode("svg", {
                  class: "w-5 h-5 mr-2",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  })
                ]),
                createTextVNode(" 数据规模分析 ")
              ], -1)),
              createBaseVNode("div", _hoisted_7$1, [
                createBaseVNode("div", _hoisted_8$1, toDisplayString(entryCount.value), 1),
                _cache[4] || (_cache[4] = createBaseVNode("div", { class: "text-sm text-gray-400" }, "记录数量", -1))
              ])
            ]),
            _cache[7] || (_cache[7] = createStaticVNode('<div class="bg-green-500/10 border border-green-500/30 rounded-lg p-4"><h4 class="text-green-300 font-semibold mb-3 flex items-center"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg> 建议解决方案 </h4><div class="space-y-3"><div class="flex items-start space-x-3"><div class="w-6 h-6 rounded-full bg-green-500 text-white text-xs flex items-center justify-center font-bold mt-0.5">1</div><div><div class="font-medium text-green-300">分割日志文件</div><div class="text-sm text-green-200">推荐每个文件少于50万条记录</div></div></div><div class="flex items-start space-x-3"><div class="w-6 h-6 rounded-full bg-green-500 text-white text-xs flex items-center justify-center font-bold mt-0.5">2</div><div><div class="font-medium text-green-300">提取特定时间区间</div><div class="text-sm text-green-200">选择需要分析的时间段进行导入</div></div></div><div class="flex items-start space-x-3"><div class="w-6 h-6 rounded-full bg-green-500 text-white text-xs flex items-center justify-center font-bold mt-0.5">3</div><div><div class="font-medium text-green-300">使用 Redis 模式</div><div class="text-sm text-green-200">处理大数据集的推荐方式</div></div></div><div class="flex items-start space-x-3"><div class="w-6 h-6 rounded-full bg-green-500 text-white text-xs flex items-center justify-center font-bold mt-0.5">4</div><div><div class="font-medium text-green-300">清理不必要的记录</div><div class="text-sm text-green-200">删除重复或无用的日志条目</div></div></div></div></div><div class="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4"><h4 class="text-yellow-300 font-semibold mb-3 flex items-center"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> 性能影响 </h4><div class="grid grid-cols-1 md:grid-cols-3 gap-3"><div class="text-center p-3 bg-gray-800/50 rounded-lg"><div class="text-yellow-400 font-semibold">界面响应</div><div class="text-sm text-gray-400">可能导致卡顿</div></div><div class="text-center p-3 bg-gray-800/50 rounded-lg"><div class="text-yellow-400 font-semibold">内存占用</div><div class="text-sm text-gray-400">使用量较高</div></div><div class="text-center p-3 bg-gray-800/50 rounded-lg"><div class="text-yellow-400 font-semibold">构建速度</div><div class="text-sm text-gray-400">树状视图缓慢</div></div></div></div><div class="text-center py-4"><p class="text-lg font-medium text-gray-200"> 是否仍要继续导入？ </p></div>', 3))
          ]),
          createBaseVNode("div", { class: "bg-gray-800/80 px-6 py-4 flex justify-end space-x-3" }, [
            createBaseVNode("button", {
              onClick: handleCancel,
              class: "px-4 py-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors"
            }, " 取消 "),
            createBaseVNode("button", {
              onClick: handleConfirm,
              class: "px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors font-medium"
            }, " 确定继续 ")
          ])
        ], 2)
      ])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1 = {
  key: 0,
  class: "fixed top-4 right-4 z-50 p-4 bg-green-500 text-white rounded-lg shadow-lg"
};
const _hoisted_2 = { class: "flex items-center gap-2 text-sm" };
const _hoisted_3 = {
  key: 0,
  class: "pi pi-spin pi-spinner"
};
const _hoisted_4 = {
  key: 1,
  class: "pi pi-database"
};
const _hoisted_5 = {
  key: 2,
  class: "pi pi-desktop"
};
const _hoisted_6 = {
  key: 1,
  class: "p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400"
};
const _hoisted_7 = { class: "flex items-center gap-2" };
const _hoisted_8 = { class: "grid grid-cols-1 lg:grid-cols-3 gap-6" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ImportPage",
  setup(__props) {
    const router = useRouter();
    const memoryStore = useMemoryStore();
    const indexedDBStore = useIndexedDBStore();
    useThemeStore();
    const isLoading = ref(false);
    const error = ref(null);
    const parseStage = ref("format-detection");
    const parseProgress = ref({
      processedLines: 0,
      totalLines: 0,
      percentage: 0,
      currentChunk: 0,
      totalChunks: 0
    });
    const storingProgress = ref({ processed: 0, total: 0 });
    const parseResult = ref(null);
    const uploadedFile = ref(null);
    const uploadedFiles = ref([]);
    const selectedExample = ref("test.log");
    const pastedText = ref("");
    const selectedFormat = ref(LogFormat.AUTO);
    const useAutoDetection = ref(true);
    const clearBeforeImport = ref(true);
    const timezoneOffset = ref(0);
    const currentDataMode = ref("loading");
    const workerManager = new WorkerManager();
    const showNotification = ref(false);
    const notificationMessage = ref("");
    const showWarningDialog = ref(false);
    const warningTotalEntries = ref(0);
    let warningDialogResolve = null;
    onMounted(async () => {
      currentDataMode.value = getCurrentDataMode();
      addDataModeListener(handleDataModeChange);
      console.log("[ImportPage] Initial data mode:", currentDataMode.value);
    });
    onUnmounted(() => {
      removeDataModeListener(handleDataModeChange);
    });
    function handleDataModeChange(mode) {
      console.log("[ImportPage] Data mode changed to:", mode);
      currentDataMode.value = mode;
    }
    async function handleFileSelected(file) {
      uploadedFile.value = file;
      uploadedFiles.value = [];
      await startParsing(async () => {
        const content = await readFileContent(file);
        return content;
      });
    }
    async function handleFilesSelected(files) {
      uploadedFiles.value = files;
      uploadedFile.value = null;
      await startParsing(async () => {
        const contents = [];
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          console.log(`[ImportPage] Reading file ${i + 1}/${files.length}: ${file.name}`);
          const content = await readFileContent(file);
          contents.push(content);
        }
        const mergedContent = contents.map((content, index) => {
          const fileName = files[index].name;
          return `# FILE: ${fileName}
${content}`;
        }).join("\n");
        console.log(`[ImportPage] Merged ${files.length} files, total size: ${mergedContent.length} bytes`);
        return mergedContent;
      });
    }
    function handleFileRemovedAt(index) {
      uploadedFiles.value = uploadedFiles.value.filter((_, i) => i !== index);
      if (uploadedFiles.value.length === 0) {
        uploadedFiles.value = [];
      }
    }
    function handleFileRemoved() {
      uploadedFile.value = null;
      uploadedFiles.value = [];
    }
    async function handleExampleImport() {
      try {
        await startParsing(async () => {
          const possiblePaths = [
            `/example_logs/${selectedExample.value}`,
            `./example_logs/${selectedExample.value}`,
            `../example_logs/${selectedExample.value}`
          ];
          let response = null;
          for (const path of possiblePaths) {
            try {
              response = await fetch(path);
              if (response.ok) {
                console.log(`[ImportPage] Successfully loaded example from: ${path}`);
                break;
              }
            } catch (error2) {
              console.warn(`[ImportPage] Failed to load from ${path}:`, error2);
              continue;
            }
          }
          if (!response || !response.ok) {
            throw new Error(`无法加载示例文件: ${selectedExample.value}。请确保文件存在且可访问。`);
          }
          return await response.text();
        });
      } catch (error2) {
        console.error("[ImportPage] Example import error:", error2);
        error2.value = `示例导入失败: ${error2 instanceof Error ? error2.message : "未知错误"}`;
      }
    }
    async function handleTextImport() {
      if (!pastedText.value.trim()) {
        error.value = "请粘贴日志内容";
        return;
      }
      await startParsing(async () => pastedText.value);
    }
    async function startParsing(getContent) {
      try {
        isLoading.value = true;
        error.value = null;
        parseResult.value = null;
        resetProgress();
        currentDataMode.value = await detectDataMode({ connectionTimeout: 1e4, maxRetries: 1 });
        console.log("[ImportPage] Data mode before parsing:", currentDataMode.value);
        const content = await getContent();
        console.log("[ImportPage] Content loaded, size:", content.length);
        await parseFileContent(content);
        console.log("[ImportPage] Import completed successfully");
      } catch (err) {
        console.error("[ImportPage] Import error:", err);
        const message = err instanceof Error ? err.message : "Unknown error";
        error.value = `导入失败: ${message}`;
      } finally {
        isLoading.value = false;
      }
    }
    function safeLog(message, ...args) {
      try {
        console.log(message, ...args);
      } catch (error2) {
        try {
          console.error("Console log error:", error2);
        } catch {
        }
      }
    }
    async function showLargeDatasetWarning(totalEntries) {
      return new Promise((resolve) => {
        showWarningDialog.value = true;
        warningTotalEntries.value = totalEntries;
        warningDialogResolve = resolve;
      });
    }
    function handleWarningConfirm() {
      showWarningDialog.value = false;
      if (warningDialogResolve) {
        warningDialogResolve(true);
        warningDialogResolve = null;
      }
    }
    function handleWarningCancel() {
      showWarningDialog.value = false;
      if (warningDialogResolve) {
        warningDialogResolve(false);
        warningDialogResolve = null;
      }
    }
    async function parseFileContent(content) {
      try {
        const sizeMB = content.length / (1024 * 1024);
        const estimatedEntries = content.split("\n").length;
        if (estimatedEntries > 1e5) {
          console.warn(`[ImportPage] Large dataset detected (${estimatedEntries} entries, ${sizeMB.toFixed(1)}MB)`);
          showLargeDatasetNotification(estimatedEntries, sizeMB);
        }
        let actualDataMode = currentDataMode.value;
        if (actualDataMode === "loading") {
          console.log("[ImportPage] Data mode still loading, waiting for initialization...");
          await new Promise((resolve) => {
            const unwatch = watch(currentDataMode, (newMode) => {
              if (newMode !== "loading") {
                actualDataMode = newMode;
                unwatch();
                resolve(void 0);
              }
            });
            setTimeout(() => {
              if (actualDataMode === "loading") {
                console.warn("[ImportPage] Data mode initialization timeout, retrying detectDataMode");
                detectDataMode({ connectionTimeout: 1e4, maxRetries: 1 }).then((mode) => {
                  actualDataMode = mode;
                  unwatch();
                  resolve(void 0);
                });
              }
            }, 7e3);
          });
        }
        const fileSize = new Blob([content]).size;
        const sizeGB = fileSize / (1024 * 1024 * 1024);
        console.log(`[ImportPage] File size: ${sizeMB.toFixed(2)}MB (${sizeGB.toFixed(2)}GB), mode: ${actualDataMode}`);
        if (actualDataMode === "local" && sizeMB > 500) {
          throw new Error(`文件过大（${sizeMB.toFixed(1)}MB），本地模式最大支持 500MB。

🔧 解决方案：
1. 使用 IndexedDB 持久化模式处理超大文件（推荐）
2. 分割文件为较小的部分
3. 清理日志文件中的冗余数据

💡 提示：IndexedDB 模式可以处理更大的文件并提供数据持久化。`);
        }
        if (actualDataMode === "indexedDB" && sizeGB > 2) {
          throw new Error(`文件过大（${sizeGB.toFixed(2)}GB），超过IndexedDB模式建议的最大文件大小（2GB）。

🔧 解决方案：
1. 分割文件为较小的部分（建议每个<1GB）
2. 清理日志文件中的冗余数据
3. 考虑使用数据库导入工具

💡 当前文件：${sizeGB.toFixed(2)}GB，建议分割为 ${Math.ceil(sizeGB)} 个文件处理。`);
        }
        if (actualDataMode === "indexedDB" && sizeGB >= 1) {
          console.warn(`[ImportPage] Very large file detected: ${sizeGB.toFixed(2)}GB in IndexedDB mode - enabling special optimizations`);
          if (typeof showLargeFileWarning !== "undefined") {
            showLargeFileWarning(`检测到超大文件（${sizeGB.toFixed(2)}GB）

🚀 系统将启用特殊优化模式：
• 增强内存管理和垃圾回收
• 扩展处理超时时间（2分钟）
• 小批量分块处理（减少内存压力）
• 实时内存监控和保护

⏱️ 预计处理时间：${Math.ceil(sizeGB * 10)}分钟
💾 建议确保系统有足够可用内存（>${Math.ceil(sizeGB * 2)}GB）

请确保在处理过程中不要关闭应用或进行其他资源密集型操作。`);
          }
        }
        if (actualDataMode === "local" && sizeMB > 100) {
          console.warn(`[ImportPage] Large file detected: ${sizeMB.toFixed(1)}MB in local mode - enabling optimizations`);
          if (sizeMB > 200) {
            try {
              safeLog("[ImportPage] Enabling aggressive memory optimization for very large file")(window).__LARGE_FILE_MODE = true;
            } catch (error2) {
              safeLog("[ImportPage] Error in large file optimization setup:", String(error2));
            }
          }
        } else if (actualDataMode === "indexedDB" && sizeMB > 500) {
          console.warn(`[ImportPage] Large file in IndexedDB mode: ${sizeMB.toFixed(1)}MB - enabling optimizations`)(window).__LARGE_FILE_MODE = true;
        } else if (actualDataMode === "local" && sizeMB > 50) {
          console.warn(`[ImportPage] Medium file warning: ${sizeMB.toFixed(1)}MB in local mode`);
        }
        parseStage.value = "format-detection";
        const lines = content.split("\n").filter((line) => line.trim());
        let detectedFormatInfo = { format: LogFormat.GENERIC, confidence: 0 };
        console.log(`[ImportPage] Processing ${lines.length} lines for format detection`);
        if (useAutoDetection.value || selectedFormat.value === LogFormat.AUTO) {
          const sampleLines = lines.slice(0, Math.min(20, lines.length));
          detectedFormatInfo = detectFormat(sampleLines);
        } else {
          detectedFormatInfo.format = selectedFormat.value;
          detectedFormatInfo.confidence = 1;
        }
        parseStage.value = "parsing";
        console.log(`[ImportPage] Starting worker parsing with format: ${detectedFormatInfo.format}, mode: ${actualDataMode}`);
        const isLargeFile = sizeMB > 200;
        if (isLargeFile) {
          console.log(`[ImportPage] Large file detected (${sizeMB.toFixed(1)}MB), using enhanced processing`);
        }
        const workerResult = await workerManager.parseFileContent(
          content,
          detectedFormatInfo.format,
          (processed, total) => {
            parseProgress.value.currentChunk = processed;
            parseProgress.value.totalChunks = total;
            parseProgress.value.percentage = Math.round(processed / total * 80);
          },
          actualDataMode,
          timezoneOffset.value
          // 传递用户设置的时区偏移量
        );
        parseStage.value = "storing";
        parseProgress.value.percentage = 85;
        if (clearBeforeImport.value) {
          if (currentDataMode.value === "indexedDB") {
            await indexedDBStore.clearAllData();
          } else {
            await memoryStore.clearAllData();
          }
        }
        if (timezoneOffset.value !== 0) {
          console.log(`[ImportPage] Applying timezone offset: ${timezoneOffset.value} minutes`);
          workerResult.entries.forEach((entry) => {
            if (entry.timestamp) {
              const originalTime = new Date(entry.timestamp);
              entry.timestamp = new Date(originalTime.getTime() + timezoneOffset.value * 60 * 1e3);
            }
          });
        }
        if (workerResult.entries.length > 0) {
          console.log("[ImportPage] Storing", workerResult.entries.length, "entries to", actualDataMode, "mode");
          try {
            if (actualDataMode === "indexedDB") {
              const total = workerResult.entries.length;
              storingProgress.value = { processed: 0, total };
              const parseBase = Math.max(parseProgress.value.percentage, 80);
              const storePromise = indexedDBStore.addLogEntries(workerResult.entries);
              const progressWatcher = watch(
                () => indexedDBStore.importProgress,
                (progress) => {
                  if (progress.isImporting) {
                    storingProgress.value = { processed: progress.processed, total: progress.total };
                    const storeRatio = progress.processed / progress.total;
                    parseProgress.value.percentage = Math.min(99, Math.round(parseBase + storeRatio * (100 - parseBase)));
                  }
                },
                { deep: true, immediate: true }
              );
              await storePromise;
              progressWatcher();
              console.log("[ImportPage] Stored to IndexedDB");
            } else {
              const total = workerResult.entries.length;
              storingProgress.value = { processed: 0, total };
              const parseBase = Math.max(parseProgress.value.percentage, 80);
              if (actualDataMode === "local" && total > 1e6) {
                const shouldContinue = await showLargeDatasetWarning(total);
                if (!shouldContinue) {
                  throw new Error("用户取消了超大数据集的导入");
                }
              }
              if (total > 1e5) {
                console.warn(`[ImportPage] Large dataset detected (${total} entries), this may take a while...`);
              }
              const storePromise = memoryStore.addLogEntries(workerResult.entries);
              const progressWatcher = watch(
                () => memoryStore.importProgress,
                (progress) => {
                  if (progress.isImporting) {
                    storingProgress.value = { processed: progress.processed, total: progress.total };
                    const storeRatio = progress.processed / progress.total;
                    parseProgress.value.percentage = Math.min(99, Math.round(parseBase + storeRatio * (100 - parseBase)));
                  }
                },
                { deep: true, immediate: true }
              );
              await storePromise;
              progressWatcher();
              console.log("[ImportPage] Stored to memoryStore, new count:", memoryStore.logEntries.length);
              console.log("[ImportPage] First entry sample:", workerResult.entries[0]);
            }
          } catch (storageError) {
            console.error("[ImportPage] Storage error:", storageError);
            if (storageError instanceof Error && storageError.message.includes("Maximum call stack size exceeded")) {
              throw new Error(`数据量过大，无法存储到内存中。

🔧 解决方案：
1. 使用 IndexedDB 模式处理大数据集（推荐）
2. 分割文件为更小的部分（<50,000条记录）
3. 清理日志文件中的重复或无用数据

💡 当前记录数：${workerResult.entries.length.toLocaleString()} 条
建议：切换到 IndexedDB 模式可以处理任意大小的数据集。`);
            } else {
              throw new Error(`数据存储失败：${storageError instanceof Error ? storageError.message : "未知错误"}
        
请尝试：
1. 刷新页面重试
2. 切换到 IndexedDB 模式
3. 检查系统内存是否充足`);
            }
          }
        } else {
          console.warn("[ImportPage] No entries to store!");
        }
        parseStage.value = "completed";
        parseProgress.value.percentage = 100;
        parseProgress.value.processedLines = workerResult.processedLines;
        parseProgress.value.totalLines = lines.length;
        parseResult.value = {
          detectedFormat: detectedFormatInfo.format,
          confidence: detectedFormatInfo.confidence,
          validLines: workerResult.entries.length,
          totalLines: lines.length,
          errors: workerResult.errors,
          entries: workerResult.entries
        };
        showSuccessNotification(`成功导入 ${workerResult.entries.length} 条日志记录`);
        console.log("[ImportPage] Final verification - memoryStore.logEntries.length:", memoryStore.logEntries.length);
        console.log("[ImportPage] Final verification - calling getAllLogEntries:", memoryStore.getAllLogEntries().length);
        memoryStore.$patch({});
      } catch (error2) {
        console.error("[ImportPage] Critical error in parseFileContent:", error2);
        parseProgress.value = {
          percentage: 0,
          currentChunk: 0,
          totalChunks: 0,
          processedLines: 0
        };
        parseStage.value = "idle";
        isLoading.value = false;
        const errorMessage = error2 instanceof Error ? error2.message : String(error2);
        throw new Error(`导入过程中发生错误: ${errorMessage}`);
      }
    }
    function showLargeDatasetNotification(entries, sizeMB) {
      console.info(`[ImportPage] Processing strategy for ${entries} entries (${sizeMB.toFixed(1)}MB):
    - Import-time threat detection: ${entries < 5e4 ? "Enabled" : "Disabled"}
    - Background indexing: ${entries > 1e4 ? "Enabled" : "Disabled"}
    - Estimated time: ${getEstimatedTime(entries)}`);
    }
    function getEstimatedTime(entries) {
      if (entries < 1e4) return "< 10秒";
      if (entries < 5e4) return "10-30秒";
      if (entries < 2e5) return "30-120秒";
      return "2-5分钟";
    }
    async function readFileContent(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error("文件读取失败"));
        reader.readAsText(file);
      });
    }
    function showSuccessNotification(message) {
      notificationMessage.value = message;
      showNotification.value = true;
      setTimeout(() => {
        showNotification.value = false;
      }, 3e3);
    }
    function resetProgress() {
      parseProgress.value = { processedLines: 0, totalLines: 0, percentage: 0, currentChunk: 0, totalChunks: 0 };
      parseStage.value = "format-detection";
    }
    function clearAll() {
      uploadedFile.value = null;
      uploadedFiles.value = [];
      parseResult.value = null;
      pastedText.value = "";
      error.value = null;
      resetProgress();
    }
    function goToLogView() {
      router.push("/logs");
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$8, {
        type: "page",
        class: "space-y-6"
      }, {
        default: withCtx(() => [
          showNotification.value ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(notificationMessage.value), 1)) : createCommentVNode("", true),
          _cache[10] || (_cache[10] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-2xl font-bold text-white mb-2" }, "日志导入"),
            createBaseVNode("p", { class: "text-gray-400" }, "导入和解析各种格式的访问日志文件")
          ], -1)),
          createBaseVNode("div", _hoisted_2, [
            _cache[7] || (_cache[7] = createBaseVNode("span", { class: "text-gray-400" }, "存储模式:", -1)),
            createBaseVNode("div", {
              class: normalizeClass([
                "px-2 py-1 rounded text-xs flex items-center gap-1",
                currentDataMode.value === "indexedDB" ? "bg-green-500/20 text-green-400" : currentDataMode.value === "local" ? "bg-blue-500/20 text-blue-400" : "bg-gray-500/20 text-gray-400"
              ])
            }, [
              currentDataMode.value === "loading" ? (openBlock(), createElementBlock("i", _hoisted_3)) : currentDataMode.value === "indexedDB" ? (openBlock(), createElementBlock("i", _hoisted_4)) : (openBlock(), createElementBlock("i", _hoisted_5)),
              createTextVNode(" " + toDisplayString(currentDataMode.value === "indexedDB" ? "IndexedDB 模式" : currentDataMode.value === "local" ? "本地内存模式" : "检测中..."), 1)
            ], 2)
          ]),
          error.value ? (openBlock(), createElementBlock("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              _cache[9] || (_cache[9] = createBaseVNode("i", { class: "pi pi-exclamation-triangle" }, null, -1)),
              createBaseVNode("span", null, toDisplayString(error.value), 1),
              createBaseVNode("button", {
                onClick: _cache[0] || (_cache[0] = ($event) => error.value = null),
                class: "ml-auto text-red-400 hover:text-white"
              }, _cache[8] || (_cache[8] = [
                createBaseVNode("i", { class: "pi pi-times" }, null, -1)
              ]))
            ])
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_8, [
            createVNode(_sfc_main$7, {
              "uploaded-file": uploadedFile.value,
              "uploaded-files": uploadedFiles.value,
              "is-loading": isLoading.value,
              onFileSelected: handleFileSelected,
              onFilesSelected: handleFilesSelected,
              onFileRemoved: handleFileRemoved,
              onFileRemovedAt: handleFileRemovedAt
            }, null, 8, ["uploaded-file", "uploaded-files", "is-loading"]),
            createVNode(_sfc_main$6, {
              "selected-example": selectedExample.value,
              "onUpdate:selectedExample": _cache[1] || (_cache[1] = ($event) => selectedExample.value = $event),
              "is-loading": isLoading.value,
              onImportExample: handleExampleImport
            }, null, 8, ["selected-example", "is-loading"]),
            createVNode(_sfc_main$5, {
              "pasted-text": pastedText.value,
              "onUpdate:pastedText": _cache[2] || (_cache[2] = ($event) => pastedText.value = $event),
              "is-loading": isLoading.value,
              onImportText: handleTextImport
            }, null, 8, ["pasted-text", "is-loading"])
          ]),
          createVNode(_sfc_main$4, {
            "selected-format": selectedFormat.value,
            "onUpdate:selectedFormat": _cache[3] || (_cache[3] = ($event) => selectedFormat.value = $event),
            "use-auto-detection": useAutoDetection.value,
            "onUpdate:useAutoDetection": _cache[4] || (_cache[4] = ($event) => useAutoDetection.value = $event),
            "clear-before-import": clearBeforeImport.value,
            "onUpdate:clearBeforeImport": _cache[5] || (_cache[5] = ($event) => clearBeforeImport.value = $event),
            "timezone-offset": timezoneOffset.value,
            "onUpdate:timezoneOffset": _cache[6] || (_cache[6] = ($event) => timezoneOffset.value = $event)
          }, null, 8, ["selected-format", "use-auto-detection", "clear-before-import", "timezone-offset"]),
          createVNode(_sfc_main$3, {
            "is-loading": isLoading.value,
            "parse-stage": parseStage.value,
            "parse-progress": parseProgress.value,
            "storing-progress": storingProgress.value
          }, null, 8, ["is-loading", "parse-stage", "parse-progress", "storing-progress"]),
          createVNode(_sfc_main$2, {
            "parse-result": parseResult.value,
            onGoToLogs: goToLogView,
            onClearAll: clearAll
          }, null, 8, ["parse-result"]),
          createVNode(_sfc_main$1, {
            visible: showWarningDialog.value,
            "total-entries": warningTotalEntries.value,
            onConfirm: handleWarningConfirm,
            onCancel: handleWarningCancel
          }, null, 8, ["visible", "total-entries"])
        ]),
        _: 1,
        __: [10]
      });
    };
  }
});
export {
  _sfc_main as default
};
