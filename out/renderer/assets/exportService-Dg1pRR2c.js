class ExportService {
  // 导出日志数据
  async exportLogData(data, options = { format: "json" }) {
    try {
      const filename = options.filename || this.generateFilename("logs", options.format);
      const filteredData = this.filterData(data, options.filters);
      let content;
      let mimeType;
      switch (options.format) {
        case "json":
          content = this.toJSON(filteredData, options);
          mimeType = "application/json";
          break;
        case "csv":
          content = this.toCSV(filteredData, options);
          mimeType = "text/csv";
          break;
        case "html":
          content = this.toHTML(filteredData, options);
          mimeType = "text/html";
          break;
        case "pdf":
          return await this.toPDF(filteredData, options);
        default:
          throw new Error(`Unsupported format: ${options.format}`);
      }
      const downloadUrl = this.createDownload(content, filename, mimeType);
      return {
        success: true,
        filePath: filename,
        downloadUrl
      };
    } catch (error) {
      console.error("Export failed:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error"
      };
    }
  }
  // 导出报告
  async exportReport(reportData, format, title) {
    try {
      const filename = this.generateFilename(`report-${title}`, format);
      let content;
      let mimeType;
      switch (format) {
        case "html":
          content = this.generateHTMLReport(reportData);
          mimeType = "text/html";
          break;
        case "json":
          content = JSON.stringify(reportData, null, 2);
          mimeType = "application/json";
          break;
        case "csv":
          content = this.generateCSVReport(reportData);
          mimeType = "text/csv";
          break;
        case "pdf":
          return await this.generatePDFReport(reportData, filename);
        default:
          throw new Error(`Unsupported report format: ${format}`);
      }
      const downloadUrl = this.createDownload(content, filename, mimeType);
      return {
        success: true,
        filePath: filename,
        downloadUrl
      };
    } catch (error) {
      console.error("Report export failed:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error"
      };
    }
  }
  // 生成文件名
  generateFilename(prefix, format) {
    const timestamp = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:.]/g, "-");
    return `${prefix}-${timestamp}.${format}`;
  }
  // 过滤数据
  filterData(data, filters) {
    if (!filters) return data;
    let filtered = [...data];
    if (filters.startDate) {
      filtered = filtered.filter((entry) => entry.timestamp >= filters.startDate);
    }
    if (filters.endDate) {
      filtered = filtered.filter((entry) => entry.timestamp <= filters.endDate);
    }
    return filtered;
  }
  // 转换为 JSON
  toJSON(data, options) {
    const processedData = data.map((entry) => ({
      ...entry,
      timestamp: this.formatDate(entry.timestamp, options.dateFormat || "iso")
    }));
    return JSON.stringify(processedData, null, 2);
  }
  // 转换为 CSV
  toCSV(data, options) {
    if (data.length === 0) return "";
    const columns = options.filters?.columns || Object.keys(data[0]);
    const headers = options.includeHeaders !== false ? columns.join(",") + "\n" : "";
    const rows = data.map((entry) => {
      return columns.map((col) => {
        let value = entry[col];
        if (col === "timestamp" && value instanceof Date) {
          value = this.formatDate(value, options.dateFormat || "iso");
        }
        if (Array.isArray(value)) {
          value = value.join("; ");
        }
        if (typeof value === "string" && (value.includes(",") || value.includes('"'))) {
          value = `"${value.replace(/"/g, '""')}"`;
        }
        return value || "";
      }).join(",");
    }).join("\n");
    return headers + rows;
  }
  // 转换为 HTML
  toHTML(data, options) {
    const columns = options.filters?.columns || Object.keys(data[0] || {});
    const headerRow = columns.map((col) => `<th>${this.escapeHtml(col)}</th>`).join("");
    const dataRows = data.map((entry) => {
      const cells = columns.map((col) => {
        let value = entry[col];
        if (col === "timestamp" && value instanceof Date) {
          value = this.formatDate(value, options.dateFormat || "local");
        }
        if (Array.isArray(value)) {
          value = value.join(", ");
        }
        return `<td>${this.escapeHtml(String(value || ""))}</td>`;
      }).join("");
      return `<tr>${cells}</tr>`;
    }).join("");
    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>日志导出报告</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; background-color: #1a1a1a; color: #e0e0e0; }
    h1 { color: #4a9eff; margin-bottom: 20px; }
    table { border-collapse: collapse; width: 100%; margin-top: 20px; background-color: #2d2d2d; }
    th, td { border: 1px solid #444; padding: 8px; text-align: left; }
    th { background-color: #3a3a3a; font-weight: bold; }
    tr:nth-child(even) { background-color: #333; }
    .stats { background-color: #2d2d2d; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
    .export-info { font-size: 12px; color: #888; margin-top: 20px; }
  </style>
</head>
<body>
  <h1>FastWLAT 日志导出报告</h1>
  <div class="stats">
    <p><strong>导出时间：</strong> ${(/* @__PURE__ */ new Date()).toLocaleString("zh-CN")}</p>
    <p><strong>记录总数：</strong> ${data.length}</p>
    <p><strong>导出格式：</strong> HTML</p>
  </div>
  <table>
    <thead>
      <tr>${headerRow}</tr>
    </thead>
    <tbody>
      ${dataRows}
    </tbody>
  </table>
  <div class="export-info">
    <p>此报告由 FastWLAT (Fast Web Log Analysis Tool) 生成</p>
  </div>
</body>
</html>
    `.trim();
  }
  // 生成 HTML 报告
  generateHTMLReport(reportData) {
    const { metadata, sections } = reportData;
    let sectionsHTML = "";
    Object.entries(sections).forEach(([sectionId, sectionData]) => {
      sectionsHTML += this.generateSectionHTML(sectionId, sectionData);
    });
    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${metadata.title}</title>
  <style>
    body { 
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
      margin: 0; 
      padding: 20px; 
      background-color: #1a1a1a; 
      color: #e0e0e0; 
      line-height: 1.6;
    }
    .container { max-width: 1200px; margin: 0 auto; }
    .header { 
      background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%); 
      padding: 30px; 
      border-radius: 10px; 
      margin-bottom: 30px; 
      text-align: center;
    }
    h1 { color: #4a9eff; margin: 0; font-size: 2.5em; }
    .subtitle { color: #a0aec0; margin-top: 10px; font-size: 1.1em; }
    .meta-info { 
      background-color: #2d2d2d; 
      padding: 20px; 
      border-radius: 8px; 
      margin-bottom: 30px; 
      display: grid; 
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
      gap: 15px;
    }
    .meta-item { display: flex; justify-content: space-between; }
    .meta-label { font-weight: bold; color: #a0aec0; }
    .meta-value { color: #e0e0e0; }
    .section { 
      background-color: #2d2d2d; 
      padding: 25px; 
      border-radius: 10px; 
      margin-bottom: 25px; 
      border-left: 4px solid #4a9eff;
    }
    .section-title { color: #4a9eff; font-size: 1.5em; margin-bottom: 15px; }
    table { 
      width: 100%; 
      border-collapse: collapse; 
      margin-top: 15px; 
      background-color: #3a3a3a;
    }
    th, td { 
      border: 1px solid #555; 
      padding: 12px; 
      text-align: left; 
    }
    th { 
      background-color: #4a4a4a; 
      font-weight: bold; 
      color: #4a9eff;
    }
    tr:nth-child(even) { background-color: #333; }
    .metric { 
      display: inline-block; 
      background-color: #3a3a3a; 
      padding: 10px 15px; 
      border-radius: 5px; 
      margin: 5px; 
      min-width: 120px; 
      text-align: center;
    }
    .metric-label { font-size: 0.9em; color: #a0aec0; }
    .metric-value { font-size: 1.4em; font-weight: bold; color: #4a9eff; }
    .threat-critical { color: #f56565; }
    .threat-high { color: #ed8936; }
    .threat-medium { color: #ecc94b; }
    .threat-low { color: #48bb78; }
    .footer { 
      text-align: center; 
      margin-top: 40px; 
      padding: 20px; 
      color: #666; 
      border-top: 1px solid #444;
    }
    .chart-placeholder {
      background-color: #3a3a3a;
      border: 2px dashed #555;
      border-radius: 8px;
      padding: 40px;
      text-align: center;
      color: #888;
      margin: 15px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>${metadata.title}</h1>
      <div class="subtitle">${metadata.description}</div>
    </div>
    
    <div class="meta-info">
      <div class="meta-item">
        <span class="meta-label">生成时间：</span>
        <span class="meta-value">${new Date(metadata.generatedAt).toLocaleString("zh-CN")}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">报告模板：</span>
        <span class="meta-value">${metadata.template}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">数据条目：</span>
        <span class="meta-value">${metadata.totalEntries.toLocaleString()}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">包含章节：</span>
        <span class="meta-value">${metadata.includedSections.length} 个</span>
      </div>
    </div>
    
    ${sectionsHTML}
    
    <div class="footer">
      <p>此报告由 FastWLAT (Fast Web Log Analysis Tool) 自动生成</p>
      <p>生成时间：${(/* @__PURE__ */ new Date()).toLocaleString("zh-CN")}</p>
    </div>
  </div>
</body>
</html>
    `.trim();
  }
  // 生成章节 HTML
  generateSectionHTML(sectionId, sectionData) {
    const title = sectionData.title || sectionId;
    let content = `<div class="section">
      <h2 class="section-title">${title}</h2>`;
    switch (sectionId) {
      case "executive-summary":
        content += this.generateExecutiveSummaryHTML(sectionData);
        break;
      case "threat-analysis":
        content += this.generateThreatAnalysisHTML(sectionData);
        break;
      case "statistics":
        content += this.generateStatisticsHTML(sectionData);
        break;
      case "ip-analysis":
        content += this.generateIPAnalysisHTML(sectionData);
        break;
      default:
        content += `<p>${sectionData.content || "此章节内容正在开发中..."}</p>`;
    }
    content += "</div>";
    return content;
  }
  // 生成执行摘要 HTML
  generateExecutiveSummaryHTML(data) {
    const { summary } = data;
    return `
      <div class="metrics-grid">
        <div class="metric">
          <div class="metric-label">总请求数</div>
          <div class="metric-value">${summary.totalRequests.toLocaleString()}</div>
        </div>
        <div class="metric">
          <div class="metric-label">威胁检测</div>
          <div class="metric-value threat-high">${summary.threatDetections}</div>
        </div>
        <div class="metric">
          <div class="metric-label">严重威胁</div>
          <div class="metric-value threat-critical">${summary.criticalFindings}</div>
        </div>
        <div class="metric">
          <div class="metric-label">独立IP</div>
          <div class="metric-value">${summary.keyMetrics.uniqueIPs}</div>
        </div>
        <div class="metric">
          <div class="metric-label">错误率</div>
          <div class="metric-value">${summary.keyMetrics.errorRate}%</div>
        </div>
        <div class="metric">
          <div class="metric-label">平均响应大小</div>
          <div class="metric-value">${summary.keyMetrics.averageResponseSize} B</div>
        </div>
      </div>
    `;
  }
  // 生成威胁分析 HTML
  generateThreatAnalysisHTML(data) {
    const topThreatsTable = data.topThreats.map(
      ([threat, count]) => `<tr><td>${threat}</td><td>${count}</td></tr>`
    ).join("");
    return `
      <p>检测到总计 <strong>${data.totalThreats}</strong> 个威胁事件</p>
      
      <h3>威胁类型统计</h3>
      <table>
        <thead>
          <tr><th>威胁类型</th><th>检测次数</th></tr>
        </thead>
        <tbody>
          ${topThreatsTable}
        </tbody>
      </table>
      
      <div class="chart-placeholder">
        📊 威胁分布图表 (需要图表库支持)
      </div>
    `;
  }
  // 生成统计信息 HTML
  generateStatisticsHTML(data) {
    const statusCodesTable = Object.entries(data.statusCodeDistribution).map(([code, count]) => `<tr><td>${code}</td><td>${count}</td></tr>`).join("");
    const methodsTable = Object.entries(data.methodDistribution).map(([method, count]) => `<tr><td>${method}</td><td>${count}</td></tr>`).join("");
    return `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
          <h3>状态码分布</h3>
          <table>
            <thead>
              <tr><th>状态码</th><th>次数</th></tr>
            </thead>
            <tbody>
              ${statusCodesTable}
            </tbody>
          </table>
        </div>
        
        <div>
          <h3>请求方法分布</h3>
          <table>
            <thead>
              <tr><th>方法</th><th>次数</th></tr>
            </thead>
            <tbody>
              ${methodsTable}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
  // 生成 IP 分析 HTML
  generateIPAnalysisHTML(data) {
    const topIPsTable = data.topIPs.map(
      ([ip, stats]) => `<tr><td>${ip}</td><td>${stats.requests}</td><td>${stats.threats}</td><td>${stats.uniquePaths}</td></tr>`
    ).join("");
    return `
      <p>总计发现 <strong>${data.totalUniqueIPs}</strong> 个独立IP地址</p>
      
      <h3>访问量前20的IP地址</h3>
      <table>
        <thead>
          <tr><th>IP地址</th><th>请求数</th><th>威胁数</th><th>独立路径</th></tr>
        </thead>
        <tbody>
          ${topIPsTable}
        </tbody>
      </table>
    `;
  }
  // 生成 CSV 报告
  generateCSVReport(reportData) {
    const { metadata, sections } = reportData;
    let csv = `报告标题,${metadata.title}
`;
    csv += `生成时间,${new Date(metadata.generatedAt).toLocaleString("zh-CN")}
`;
    csv += `数据条目,${metadata.totalEntries}

`;
    Object.entries(sections).forEach(([sectionId, sectionData]) => {
      csv += `
章节: ${sectionData.title || sectionId}
`;
      csv += this.generateSectionCSV(sectionId, sectionData);
      csv += "\n";
    });
    return csv;
  }
  // 生成章节 CSV
  generateSectionCSV(sectionId, sectionData) {
    switch (sectionId) {
      case "threat-analysis":
        if (sectionData.topThreats) {
          let csv = "威胁类型,检测次数\n";
          sectionData.topThreats.forEach(([threat, count]) => {
            csv += `${threat},${count}
`;
          });
          return csv;
        }
        break;
      case "ip-analysis":
        if (sectionData.topIPs) {
          let csv = "IP地址,请求数,威胁数,独立路径数\n";
          sectionData.topIPs.forEach(([ip, stats]) => {
            csv += `${ip},${stats.requests},${stats.threats},${stats.uniquePaths}
`;
          });
          return csv;
        }
        break;
      default:
        return `${sectionData.content || "此章节内容正在开发中..."}
`;
    }
    return "";
  }
  // 生成 PDF 报告（简化实现）
  async generatePDFReport(reportData, filename) {
    try {
      const htmlContent = this.generateHTMLReport(reportData);
      const blob = new Blob([htmlContent], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      return {
        success: true,
        filePath: filename.replace(".pdf", ".html"),
        downloadUrl: url
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "PDF generation failed"
      };
    }
  }
  // PDF 导出（基础版本）
  async toPDF(data, options) {
    try {
      const htmlContent = this.toHTML(data, options);
      const filename = options.filename?.replace(".pdf", ".html") || "export.html";
      const downloadUrl = this.createDownload(htmlContent, filename, "text/html");
      return {
        success: true,
        filePath: filename,
        downloadUrl
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "PDF export failed"
      };
    }
  }
  // 创建下载链接
  createDownload(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1e3);
    return url;
  }
  // 格式化日期
  formatDate(date, format) {
    switch (format) {
      case "iso":
        return date.toISOString();
      case "local":
        return date.toLocaleString("zh-CN");
      case "timestamp":
        return date.getTime().toString();
      default:
        return date.toISOString();
    }
  }
  // HTML 转义
  escapeHtml(text) {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
  }
  // 快速导出（常用格式）
  async exportToJSON(data, filename) {
    return this.exportLogData(data, { format: "json", filename });
  }
  async exportToCSV(data, filename) {
    return this.exportLogData(data, { format: "csv", filename });
  }
  async exportToHTML(data, filename) {
    return this.exportLogData(data, { format: "html", filename });
  }
}
const exportService = new ExportService();
export {
  exportService as e
};
