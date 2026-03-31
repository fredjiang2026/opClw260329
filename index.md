---
permalink: /
title: "硒蛋白基因可变剪切分析数据下载中心"
layout: default
---

# 🧬 硒蛋白基因可变剪切分析数据下载中心

这是一个完整的硒蛋白基因可变剪切分析项目，包含25个硒蛋白基因的多序列比对、基因结构分析和可变剪切事件分析。

## 📊 项目内容

### 1. 可变剪切分析
- **使用工具：** rMATS, SUPPA2
- **分析类型：** SE (外显子跳跃), MXE (互斥外显子), A3SS (可变3'剪接位点), A5SS (可变5'剪接位点), RI (内含子保留)
- **关键基因：** GPX4, TXNRD1, SELENOP, SELENOM, SELENON, SELENOK
- **分析方法：** PSI (Percent Spliced In) 值计算，ΔPSI差异分析

### 2. 多序列比对
- **使用软件：** MUSCLE
- **比对序列：** GPX4, SELENOP, TXNRD1 异构体序列
- **输出格式：** FASTA, Clustal
- **可视化工具：** MVIEW

### 3. PASA分析
- **使用软件：** PASA (Program to Assemble Spliced Alignments)
- **分析内容：** 基因结构差异分析，Sec(UGA)密码子位置识别，外显子-内含子边界分析
- **输出格式：** GFF3

### 4. 可视化
- **基因结构图：** GPX4, SELENOP基因外显子-内含子结构
- **Sashimi plots：** 可变剪切junction reads可视化
- **多序列比对图：** GPX4异构体比对可视化

## 📂 快速访问

- [📥 数据下载中心](data_download.html)
- [🧬 可变剪切分析](splicing_analysis.html)
- [📖 下载指南](README_DOWNLOAD.md)
- [🌐 公网下载页面](public_download_page.html)
- [📦 GitHub仓库](https://github.com/fredjiang2026/opClw260329)

## 📊 数据分析

### 主要发现：
1. **GPX4可变剪切：** 检测到8个可变剪切事件（3个SE, 1个MXE, 2个A3SS, 1个A5SS, 1个RI）
2. **SELENOP可变剪切：** 检测到5个可变剪切事件（2个SE, 1个MXE, 1个A3SS, 1个A5SS）
3. **Sec位点分析：** SELENOP有10个Sec(UGA)位点，不同异构体Sec位点数量不同
4. **GPX4异构体：** 4种异构体，包括Sec+型（磷脂过氧化物酶活性）和Sec-型（仅过氧化物酶活性）

## 🛠️ 如何使用

### 1. 查看HTML报告
直接访问HTML文件查看分析结果：
- `data_download.html` - 数据下载中心
- `splicing_analysis.html` - 可变剪切分析
- `public_download_page.html` - 公网下载页面

### 2. 下载文件
- 直接点击HTML页面中的链接下载
- 运行下载脚本：`./download_script.sh`
- 下载完整压缩包：`selenium-analysis-data.tar.gz`

### 3. 在线GitHub Pages
所有文件已经上传到GitHub，可以直接访问GitHub仓库下载。

## 🔬 技术要点

- 使用MUSCLE进行多序列比对
- 使用PASA分析基因结构差异
- 使用rMATS和SUPPA2进行可变剪切分析
- 生成统一一致的基因结构图和比对可视化

## 📝 引用格式

如果使用本数据，请引用：
```
硒蛋白基因可变剪切分析数据集, 2026-03-31
```

## 📅 更新历史

- **v1.0 (2026-03-30):** 基础分析，表达数据收集
- **v2.0 (2026-03-31):** 可变剪切分析，多序列比对，PASA分析，数据下载中心