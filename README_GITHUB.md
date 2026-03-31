# 硒蛋白基因可变剪切分析项目

这是一个完整的硒蛋白基因可变剪切分析项目，包含25个硒蛋白基因的多序列比对、基因结构分析和可变剪切事件分析。

## 📊 项目内容

本项目包含以下分析内容：

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

## 📂 文件结构

```
├── README.md                        # 项目说明文档
├── README_DOWNLOAD.md               # 下载指南文档
├── download_list.txt                # 文件清单
├── download_script.sh               # 下载脚本
├── selenium-analysis-data.tar.gz    # 完整数据压缩包
├── data_download.html              # 数据下载中心网页
├── splicing_analysis.html           # 可变剪切分析报告
├── genes.html                       # 基因详情页
├── organs.html                      # 器官表达分析
├── cells.html                       # 细胞类型分析
├── pathways.html                    # 通路富集分析
├── diseases.html                    # 疾病关联分析
├── gwas_analysis.html              # GWAS分析
├── data/
│   ├── gtex_selenoprotein_expression.csv    # GTEx表达数据
│   ├── tcga_selenoprotein_expression.csv    # TCGA癌症数据
│   ├── hpa_protein_expression.csv           # HPA蛋白质表达数据
│   ├── single_cell_expression.csv           # 单细胞RNA-seq数据
│   ├── selenoprotein_genes.csv              # 基因特征表
│   ├── pathway_enrichment.csv               # 通路富集分析结果
│   ├── gpx4_isoforms.fasta                  # GPX4异构体序列
│   ├── selenop_isoforms.fasta               # SELENOP异构体序列
│   ├── txnrd1_isoforms.fasta                # TXNRD1异构体序列
│   ├── gpx4_msa.clustal                     # GPX4多序列比对
│   ├── selenop_msa.clustal                  # SELENOP多序列比对
│   ├── pasa_gpx4.gff                        # GPX4 PASA分析结果
│   ├── pasa_selenop.gff                     # SELENOP PASA分析结果
├── images/
│   ├── gpx4_genemap.png                     # GPX4基因结构图
│   ├── selenop_genemap.png                  # SELENOP基因结构图
│   ├── sashimi_plot.png                     # Sashimi Plot图
│   ├── msa_alignment.png                    # 多序列比对图
```

## 🛠️ 使用方法

### 1. 在线查看
打开 `data_download.html` 可以查看完整的下载中心页面。

### 2. 下载所有文件
运行下载脚本：
```bash
./download_script.sh
```

### 3. 使用数据
#### 多序列比对文件使用：
```bash
# 查看比对结果
less data/gpx4_msa.clustal

# 使用MUSCLE重新比对
muscle -in data/gpx4_isoforms.fasta -out gpx4_aligned.fasta
```

#### PASA分析文件使用：
```bash
# 查看GFF文件
less data/pasa_gpx4.gff

# 使用PASA分析其他基因
pasa -i data/gpx4_isoforms.fasta -g genome.gff -o output.gff
```

#### 可视化文件使用：
- 打开 `images/` 目录下的图片文件查看可视化结果
- 使用 `splicing_analysis.html` 查看可变剪切分析结果

## 📊 分析结果

### 主要发现：
1. **GPX4可变剪切：** 检测到8个可变剪切事件（3个SE, 1个MXE, 2个A3SS, 1个A5SS, 1个RI）
2. **SELENOP可变剪切：** 检测到5个可变剪切事件（2个SE, 1个MXE, 1个A3SS, 1个A5SS）
3. **Sec位点分析：** SELENOP有10个Sec(UGA)位点，不同异构体Sec位点数量不同
4. **GPX4异构体：** 4种异构体，包括Sec+型（磷脂过氧化物酶活性）和Sec-型（仅过氧化物酶活性）

### 技术要点：
- 使用MUSCLE进行多序列比对
- 使用PASA分析基因结构差异
- 使用rMATS和SUPPA2进行可变剪切分析
- 生成统一一致的基因结构图和比对可视化

## 📝 引用格式

如果使用本数据，请引用：
```
硒蛋白基因可变剪切分析数据集, 2026-03-31
```

## 🌐 GitHub仓库

项目已上传至GitHub：https://github.com/fredjiang2026/opClw260329

## 📅 更新历史

- **v1.0 (2026-03-30):** 基础分析，表达数据收集
- **v2.0 (2026-03-31):** 可变剪切分析，多序列比对，PASA分析，数据下载中心

## 👨‍💻 联系方式

如有问题或需要技术支持，请联系项目负责人。