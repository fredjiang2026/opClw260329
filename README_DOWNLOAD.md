# 硒蛋白基因可变剪切分析 - 数据下载中心

## 📊 项目概述

本项目对25个硒蛋白基因进行了全面的分析，包括：
- 可变剪切分析（使用rMATS和SUPPA2）
- 多序列比对（使用MUSCLE）
- 基因结构差异分析（使用PASA）
- 可视化（Sashimi plots、基因结构图）

## 📂 文件组织结构

```
├── selenium_genes.txt          # 硒蛋白基因列表
├── data/                       # 原始数据文件夹
│   ├── gtex_selenoprotein_expression.csv    # GTEX表达数据
│   ├── tcga_selenoprotein_expression.csv    # TCGA癌症表达数据
│   ├── hpa_protein_expression.csv           # HPA蛋白质表达数据
│   ├── single_cell_expression.csv           # 单细胞表达数据
│   ├── selenoprotein_genes.csv              # 基因特征表
│   ├── pathway_enrichment.csv               # 通路富集分析结果
│   ├── gpx4_isoforms.fasta                  # GPX4异构体序列
│   ├── selenop_isoforms.fasta               # SELENOP异构体序列
│   ├── txnrd1_isoforms.fasta                # TXNRD1异构体序列
│   ├── gpx4_msa.clustal                     # GPX4多序列比对结果
│   ├── selenop_msa.clustal                  # SELENOP多序列比对结果
│   ├── pasa_gpx4.gff                        # GPX4 PASA分析结果
│   ├── pasa_selenop.gff                     # SELENOP PASA分析结果
├── images/                    # 图片文件夹
│   ├── gpx4_genemap.png      # GPX4基因结构图
│   ├── selenop_genemap.png   # SELENOP基因结构图
│   ├── sashimi_plot.png      # 可变剪切junction可视化
│   ├── msa_alignment.png     # 多序列比对图
├── HTML报告/                  # 分析报告文件夹
│   ├── index.html            # 主页
│   ├── splicing_analysis.html # 可变剪切分析报告
│   ├── genes.html            # 基因详情页
│   ├── organs.html           # 器官表达分析
│   ├── cells.html            # 细胞类型分析
│   ├── pathways.html         # 通路富集分析
│   ├── diseases.html         # 疾病关联分析
│   ├── gwas_analysis.html   # GWAS分析
│   ├── data_download.html    # 数据下载中心
├── css/                       # 样式文件
│   ├── style.css             # CSS样式
├── js/                        # JavaScript文件
│   ├── main.js               # JavaScript脚本
```

## 🛠️ 分析方法说明

### 可变剪切分析

**工具：**
1. **rMATS** - 检测可变剪切事件
   ```bash
   python run_rmats.py --gtf gtf_file.gtf --b1 control.bam --b2 treatment.bam
   ```

2. **SUPPA2** - 计算PSI值
   ```bash
   suppa.py psi -i transcripts.gtf -e expression.tsv -o psi_values
   ```

**关键参数：**
- FDR阈值: 0.05
- ΔPSI阈值: 0.15
- 事件类型: SE, MXE, A3SS, A5SS, RI

### 多序列比对

**工具：**
1. **MUSCLE** - 多序列比对软件
   ```bash
   muscle -in isoforms.fasta -out msa.clustal -clw
   ```

2. **MVIEW** - 可视化比对结果
   ```bash
   mview -in msa.clustal -out msa.html -html
   ```

**参数设置：**
- 比对算法: MUSCLE v4
- 迭代次数: 3次
- 输出格式: Clustal, HTML, PDF

### PASA分析

**工具：**
**PASA** (Program to Assemble Spliced Alignments) - 分析基因结构差异
```bash
pasa -c config.txt -i isoforms.fasta -g genome.gff -o pasa_results.gff
```

**分析内容：**
- 外显子-内含子边界识别
- Sec(UGA)密码子位置分析
- 功能结构域预测
- 异构体结构差异比较

## 🖼️ 可视化方法

### 基因结构图
使用Matplotlib生成基因结构图：
```python
import matplotlib.pyplot as plt
# 绘制基因外显子结构
```

### Sashimi plots
使用rmats2sashimiplot工具：
```bash
rmats2sashimiplot -b1 control.bam -b2 treatment.bam -e SE_event.txt -o sashimi.png
```

### 多序列比对可视化
使用BioPython和MVIEW：
```python
from Bio import AlignIO
import matplotlib.pyplot as plt
```

## 📄 文件格式说明

### CSV数据文件
格式：基因 | 组织/癌症类型 | 表达值 | 统计参数

### FASTA文件
标准FASTA格式，包含异构体序列注释：
```
>GPX4-001 (含Sec型)
氨基酸序列...
```

### Clustal文件
标准Clustal格式，包含序列比对结果。

### GFF文件
PASA输出格式，包含基因结构和功能注释。

## 📦 批量下载指南

### 下载所有CSV数据文件
```bash
wget -r -np -R "index.html*" --accept="*.csv" https://your-server.com/path/to/project/
```

### 下载所有图片文件
```bash
wget -r -np -R "index.html*" --accept="*.png,*.jpg,*.svg" https://your-server.com/path/to/project/
```

### 下载所有HTML报告
```bash
wget -r -np -R "*.csv,*.png" --accept="*.html" https://your-server.com/path/to/project/
```

### Git下载
```bash
git clone https://github.com/yourusername/selenoprotein-analysis.git
cd selenoprotein-analysis
```

## 🔬 数据分析应用

### 可变剪切差异分析
使用PSI值进行差异剪切分析：
- ΔPSI: 差异PSI值
- P-value: 显著性
- FDR: 错误发现率校正

### Sec位点分析
识别硒代半胱氨酸(UGA)位置：
 - GPX4: Sec⁶⁷或Sec⁴²位置差异
 - SELENOP: 10个Sec位点的完整型与缺失型

### 结构功能预测
根据可变剪切预测功能差异：
 - GPX4: Sec+型有磷脂过氧化物酶活性
 - SELENOP: Sec位点数影响硒转运能力

## 📝 引用格式

如果使用本数据，请引用：
```
Selenoprotein Alternative Splicing Analysis Dataset, 2026
```

## 👨‍💻 联系方式

如有问题或需要技术支持，请联系项目负责人。

---

**版本信息：** v2.0 | **发布日期：** 2026-03-31 | **主要更新：** 可变剪切分析、多序列比对、PASA分析