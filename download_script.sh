#!/bin/bash
# 硒蛋白基因分析数据下载脚本
# 使用方法：./download_script.sh

echo "硒蛋白基因可变剪切分析数据下载脚本"
echo "======================================"

# 创建下载目录
mkdir -p selenium-analysis-data
cd selenium-analysis-data

echo "下载原始数据文件..."
# 下载原始数据文件
cp ../selenium_genes.txt .
mkdir -p data
cp ../data/*.csv data/
cp ../data/*.fasta data/
cp ../data/*.clustal data/
cp ../data/*.gff data/

echo "下载图片文件..."
mkdir -p images
cp ../images/*.png images/

echo "下载HTML报告..."
cp ../*.html .
mkdir -p css js
cp ../css/* css/
cp ../js/* js/

echo "下载Markdown文档..."
cp ../*.md .

echo "生成文件清单..."
find . -type f > files.txt

echo "生成统计数据..."
echo "总文件数："$(find . -type f | wc -l)
echo "总文件夹数："$(find . -type d | wc -l)
echo "总大小："$(du -sh .)

echo "创建压缩包..."
tar -czf selenium-analysis-data.tar.gz *

echo "下载完成！"
echo "文件已保存在 selenium-analysis-data/ 文件夹中"
echo "压缩包：selenium-analysis-data.tar.gz"
echo "文件清单：files.txt"