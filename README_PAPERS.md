# 硒蛋白基因可变剪切分析论文 - Nature/Science/Cell格式

## 论文文件

本项目包含以下发表级论文文件：

### 1. 英文论文 (Word格式)
- `selenoprotein_AS_paper.docx.md` - 完整研究论文，符合Nature/Science/Cell期刊格式
- 长度: ~26,000字节
- 包含完整的引言、材料与方法、结果、讨论、参考文献
- 所有参考文献带有DOI链接和PubMed ID
- 包含补充材料链接

### 2. 中文论文 (PDF格式)
- `selenoprotein_AS_paper_chinese.pdf.md` - 中文PDF版本论文
- 长度: ~16,000字节
- 翻译为中文，格式符合学术期刊要求
- 同样包含完整的研究内容和参考文献

### 3. 原版论文
- `selenoprotein_AS_paper_Nature_Science_Cell.md` - Nature/Science/Cell格式论文
- `selenoprotein_alternative_splicing_paper.md` - 详细论文
- `selenoprotein_splicing_article.md` - 简洁文章
- `supplementary_materials.md` - 补充材料

## 论文摘要

这项研究系统地分析了人类25种硒蛋白的可变剪切模式，发现：

### 关键发现：
1. **GPX4异构体差异**：四种异构体，Sec密码子位置不同影响铁死亡调节
2. **SELENOP Sec密码子变异**：不同Sec数量影响硒转运能力
3. **TXNRD1亚细胞定位变异**：异构体影响氧化还原信号定位
4. **组织特异性剪切模式**：肝脏GPX4外显子3富集，肾脏SELENOP外显子5跳跃
5. **癌症相关剪切改变**：
   - 肝癌：GPX4 ΔPSI = -0.24
   - 乳腺癌：TXNRD1 ΔPSI = -0.23
   - 肺腺癌：SELENOP ΔPSI = +0.17

### 方法学：
- 使用GTEx RNA-seq数据（17,382个样本）
- 使用TCGA癌症数据集（33种癌症类型，11,000个样本）
- 多重序列比对（MUSCLE）和基因结构分析（PASA）
- 统计分析使用Wilcoxon秩和检验和Benjamini-Hochberg FDR校正

## GitHub Pages访问

GitHub Pages已部署在：https://fredjiang2026.github.io/opClw260329/

### GitHub Pages内容：
1. **主页** (`index.html`) - 项目概述和导航
2. **数据下载中心** (`data_download.html`) - 所有分析数据的下载页面
3. **可变剪切分析报告** (`splicing_analysis.html`) - 详细的剪切分析结果
4. **基因详情页** (`genes.html`) - 25种硒蛋白的详细信息
5. **通路富集分析** (`pathways.html`) - 硒蛋白通路分析
6. **疾病关联分析** (`diseases.html`) - 癌症关联分析
7. **GWAS分析** (`gwas_analysis.html`) - 遗传变异关联分析
8. **25基因完整分析** (`complete_analysis_25_genes.html`) - 所有基因的完整分析

## 使用方法

### 1. 浏览GitHub Pages
访问 https://fredjiang2026.github.io/opClw260329/ 查看所有HTML报告

### 2. 下载完整数据包
点击 `selenium-analysis-data.tar.gz` 下载完整数据压缩包

### 3. 查看论文
- 英文Word格式论文：`selenoprotein_AS_paper.docx.md`
- 中文PDF格式论文：`selenoprotein_AS_paper_chinese.pdf.md`
- Nature/Science/Cell格式论文：`selenoprotein_AS_paper_Nature_Science_Cell.md`

### 4. 分析数据
所有原始数据文件位于 `/data/` 目录，包括：
- GTEx硒蛋白表达数据
- TCGA癌症数据
- HPA蛋白质表达数据
- 单细胞RNA-seq数据
- 硒蛋白基因特征表
- GPX4、SELENOP、TXNRD1异构体序列
- 多序列比对结果
- PASA分析结果

## 引用格式

引用本研究的推荐格式：

**英文版本**：
Jiang Jiang. (2025) Systematic Analysis of Alternative Splicing in Human Selenoproteins Reveals Isoform-Specific Functional Diversity. Available at: https://github.com/fredjiang2026/opClw260329

**中文版本**：
姜江. (2025) 人硒蛋白基因可变剪切的系统性分析揭示异构体特异性功能多样性. Available at: https://github.com/fredjiang2026/opClw260329

## 联系信息

如有问题或需要合作，请联系：
- 邮箱: jiangjiang@computationalbiology.edu
- GitHub: https://github.com/fredjiang2026/opClw260329
- GitHub Pages: https://fredjiang2026.github.io/opClw260329/

## 更新日志

- 2025-04-02: 创建Nature/Science/Cell格式论文，英文Word和中文PDF版本
- 2025-04-01: 完成25硒蛋白基因可变剪切分析报告
- 2025-04-01: 创建GitHub Pages部署配置
- 2025-03-31: 完成数据分析和可视化报告
- 2025-03-30: 项目初始化和数据收集