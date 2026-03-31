# 硒蛋白基因可变剪切分析 - GitHub Pages

这是一个完整的硒蛋白基因可变剪切分析项目，包含25个硒蛋白基因的多序列比对、基因结构分析和可变剪切事件分析。

## GitHub Pages设置

### 1. 启用GitHub Pages
1. 在GitHub仓库设置中，选择"Pages"选项
2. 选择分支：`main`
3. 选择源：`root directory`
4. 等待几分钟，GitHub Pages会自动部署

### 2. 访问地址
部署完成后，可以通过以下地址访问：
https://fredjiang2026.github.io/opClw260329/

### 3. 主页文件
- `index.md` - GitHub Pages主页
- `data_download.html` - 数据下载中心
- `splicing_analysis.html` - 可变剪切分析报告
- `public_download_page.html` - 公网下载页面

## 文件结构

```
├── index.md                         # GitHub Pages主页
├── _config.yml                      # Jekyll配置
├── 404.md                           # 404页面
├── README_GITHUB_PAGES.md           # GitHub Pages说明
├── README.md                        # 项目README
├── README_DOWNLOAD.md               # 下载指南
├── data_download.html               # 数据下载中心
├── public_download_page.html        # 公网下载页面
├── splicing_analysis.html           # 可变剪切分析
├── genes.html                       # 基因详情页
├── organs.html                      # 器官表达分析
├── cells.html                       # 细胞类型分析
├── pathways.html                    # 通路富集分析
├── diseases.html                    # 疾病关联分析
├── gwas_analysis.html               # GWAS分析
├── detailed_analysis.html           # 详细分析报告
├── final_complete_report.html       # 最终完整报告
├── complete_analysis_25_genes.html  # 25基因完整分析
├── expression_heatmap.html          # 表达热图
├── selenium_simple.html             # 硒蛋白简单页面
├── analysis_progress.html           # 分析进度可视化
├── analysis_workflow.html           # 分析工作流程图
├── computational_process.html       # 计算过程详细描述
├── data_download_report.html       # 数据下载中心报告
├── pathway_analysis_detailed.html   # 通路详细分析页面
├── disease_analysis_detailed.html   # 疾病详细分析页面
├── github_upload_complete.html     # GitHub上传完成页面
├── local_download_guide.html        # 离线下载指南
├── download_list.txt                # 文件清单
├── download_script.sh               # 下载脚本
├── selenium-analysis-data.tar.gz    # 完整数据压缩包
├── analysis_plan.md                 # 分析计划文档
├── real_analysis.md                 # 实际分析记录
├── computational_analysis.md        # 计算分析方法
├── analysis_report.md               # 分析报告Markdown版本
├── css/
│   ├── style.css                    # CSS样式文件
├── js/
│   ├── main.js                      # JavaScript脚本文件
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

## 使用方法

### 1. 访问GitHub Pages
部署完成后，访问 https://fredjiang2026.github.io/opClw260329/

### 2. 下载文件
GitHub Pages上的HTML文件可以直接访问，数据文件可以通过GitHub仓库下载。

### 3. 下载完整数据包
点击 `selenium-analysis-data.tar.gz` 下载完整数据包。

### 4. 查看分析报告
GitHub Pages支持直接显示HTML页面，用户可以浏览所有分析报告。

## 自动部署

GitHub Pages会自动部署仓库内容。每次更新后，GitHub会自动重新部署。

## 注意事项

1. GitHub Pages默认不支持某些文件类型的预览
2. 大型文件可能需要从GitHub仓库直接下载
3. 如果需要特殊的服务器配置，可以添加自定义Jekyll插件

## 更新方法

1. 修改文件后提交到GitHub
2. GitHub会自动重新部署Pages
3. 等待几分钟后查看更新的页面