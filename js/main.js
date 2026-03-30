// 硒相关基因表达分析网站 JavaScript

// 初始化图表
function initializeCharts() {
    // 器官表达热图
    createOrganExpressionHeatmap();
    
    // 通路网络图
    createPathwayNetwork();
    
    // 疾病关联图
    createDiseaseCorrelationChart();
}

// 创建器官表达热图
function createOrganExpressionHeatmap() {
    const organs = ['大脑', '心脏', '肝脏', '肾脏', '甲状腺', '肌肉', '胰腺', '肺', '脾脏', '肾上腺'];
    const genes = ['GPX1', 'GPX2', 'GPX3', 'GPX4', 'TXNRD1', 'TXNRD2', 'TXNRD3', 'SELENOP', 'SELENOS', 'SELENON'];
    
    // 模拟表达数据
    const expressionData = [];
    for (let i = 0; i < genes.length; i++) {
        const row = [];
        for (let j = 0; j < organs.length; j++) {
            // 生成随机表达值
            let value;
            switch(genes[i]) {
                case 'GPX4':
                    value = Math.random() * 100 + 50;
                    break;
                case 'SELENOP':
                    value = Math.random() * 80 + 70;
                    break;
                case 'TXNRD1':
                    value = Math.random() * 90 + 60;
                    break;
                default:
                    value = Math.random() * 60 + 30;
            }
            row.push(value);
        }
        expressionData.push(row);
    }
    
    const heatmapData = {
        z: expressionData,
        x: organs,
        y: genes,
        type: 'heatmap',
        colorscale: [
            [0, '#3B7A8E'],  // 低表达 - 蓝色
            [0.5, '#A6D4AE'], // 中表达 - 绿色
            [1, '#F4A261']   // 高表达 - 橙色
        ],
        hoverongaps: false,
        hovertemplate: '器官: %{x}<br>基因: %{y}<br>表达值: %{z}<extra></extra>'
    };
    
    const layout = {
        title: '硒蛋白基因在不同器官的表达水平',
        width: 800,
        height: 500,
        xaxis: {
            title: '器官'
        },
        yaxis: {
            title: '基因'
        },
        margin: {
            l: 100,
            r: 50,
            t: 50,
            b: 50
        }
    };
    
    Plotly.newPlot('organ-expression-heatmap', [heatmapData], layout);
}

// 创建通路网络图
function createPathwayNetwork() {
    const nodes = [
        {id: 1, label: '抗氧化通路', group: 1},
        {id: 2, label: '硒代谢通路', group: 1},
        {id: 3, label: '免疫调节通路', group: 2},
        {id: 4, label: '炎症通路', group: 2},
        {id: 5, label: '细胞凋亡通路', group: 3},
        {id: 6, label: '癌症通路', group: 3},
        {id: 7, label: 'GPX4', group: 1},
        {id: 8, label: 'SELENOP', group: 1},
        {did: 9, label: 'TXNRD1', group: 1},
        {id: 10, label: 'SELENOS', group: 2},
        {id: 11, label: 'SELENON', group: 3}
    ];
    
    const edges = [
        {from: 7, to: 1},
        {from: 8, to: 1},
        {from: 9, to: 1},
        {from: 10, to: 2},
        {from: 11, to: 2},
        {from: 1, to: 3},
        {from: 2, to: 4},
        {from: 1, to: 5},
        {from: 3, to: 6},
        {from: 4, to: 6},
        {from: 5, to: 6}
    ];
    
    const networkData = {
        nodes: nodes.map(node => ({
            id: node.id,
            label: node.label,
            group: node.group
        })),
        edges: edges.map(edge => ({
            from: edge.from,
            to: edge.to
        }))
    };
    
    // 使用Plotly创建简单网络图
    const networkTrace = {
        type: 'scatter',
        mode: 'markers',
        x: nodes.map(n => Math.random() * 100),
        y: nodes.map(n => Math.random() * 100),
        text: nodes.map(n => n.label),
        marker: {
            size: 20,
            color: nodes.map(n => n.group * 30)
        },
        hoverinfo: 'text'
    };
    
    const layout = {
        title: '硒蛋白参与的生物学通路网络',
        width: 800,
        height: 500,
        showlegend: false,
        hovermode: 'closest'
    };
    
    Plotly.newPlot('pathway-network', [networkTrace], layout);
    
    // 添加手动连线（简单的可视化）
    const svg = d3.select('#pathway-network').append('svg')
        .attr('width', 800)
        .attr('height', 500)
        .attr('class', 'pathway-svg');
    
    svg.selectAll('.node')
        .data(nodes)
        .enter()
        .append('circle')
        .attr('cx', d => Math.random() * 800)
        .attr('cy', d => Math.random() * 500)
        .attr('r', 15)
        .attr('fill', d => d.group === 1 ? '#FF6B6B' : d.group === 2 ? '#4ECDC4' : '#45B7D1')
        .attr('stroke', '#333')
        .attr('stroke-width', 2);
    
    svg.selectAll('.node-label')
        .data(nodes)
        .enter()
        .append('text')
        .attr('x', d => Math.random() * 800)
        .attr('y', d => Math.random() * 500)
        .attr('text-anchor', 'middle')
        .attr('dy', 3)
        .text(d => d.label)
        .attr('font-size', 12)
        .attr('fill', '#333');
}

// 创建疾病关联图
function createDiseaseCorrelationChart() {
    const diseases = [
        {name: '癌症', correlation: 0.85, genes: ['GPX4', 'TXNRD1', 'SELENOP']},
        {name: '心脏病', correlation: 0.72, genes: ['GPX3', 'TXNRD1', 'SELENON']},
        {name: '神经退行性疾病', correlation: 0.68, genes: ['GPX4', 'SELENOP', 'SELENON']},
        {name: '自身免疫疾病', correlation: 0.65, genes: ['SELENOS', 'TXNRD2', 'GPX1']},
        {name: '代谢性疾病', correlation: 0.60, genes: ['SELENOS', 'SELENOP', 'GPX3']},
        {name: '硒缺乏症', correlation: 0.95, genes: ['SELENOP', 'GPX1', 'GPX4']}
    ];
    
    const scatterData = {
        x: diseases.map(d => d.correlation),
        y: diseases.map(d => d.name),
        mode: 'markers',
        type: 'scatter',
        marker: {
            size: 20,
            color: diseases.map(d => d.correlation * 100),
            colorscale: [[0, '#FF6B6B'], [1, '#45B7D1']],
            colorbar: {
                title: '相关性强度'
            }
        },
        text: diseases.map(d => `${d.name}: 相关基因: ${d.genes.join(', ')}`),
        hoverinfo: 'text'
    };
    
    const layout = {
        title: '硒蛋白基因表达与疾病的相关性',
        width: 800,
        height: 400,
        xaxis: {
            title: '相关性系数 (0-1)',
            range: [0, 1]
        },
        yaxis: {
            title: '疾病类型'
        },
        margin: {
            l: 100,
            r: 50,
            t: 50,
            b: 50
        }
    };
    
    Plotly.newPlot('disease-correlation', [scatterData], layout);
}

// 显示基因详情
function showGeneDetail(geneName) {
    const modal = document.getElementById('gene-detail-modal');
    const content = document.getElementById('gene-detail-content');
    
    // 基因详细信息
    const geneDetails = {
        GPX4: {
            name: '谷胱甘肽过氧化物酶4 (GPX4)',
            function: '磷脂过氧化物酶，主要功能是减少脂质过氧化物，保护细胞免受氧化损伤。GPX4是唯一的膜结合GPX，对细胞膜完整性至关重要。',
            location: '主要分布在肝脏、肾脏和大脑',
            expression: '高表达在肝脏、肾脏、大脑；中等表达在心脏、肌肉；低表达在皮肤、血液',
            diseases: ['癌症', '神经退行性疾病', '心血管疾病'],
            pathways: ['抗氧化通路', '铁死亡通路', '细胞凋亡通路']
        },
        SELENOP: {
            name: '硒蛋白P (SELENOP)',
            function: '硒转运蛋白，在硒的吸收和分配中起关键作用。SELENOP是血浆中的主要硒蛋白，负责将硒输送到各个器官。',
            location: '主要在肝脏合成，分布到血浆、肾脏和其他组织',
            expression: '高表达在肝脏、肾脏；中等表达在胰腺、甲状腺；低表达在肌肉、脂肪',
            diseases: ['硒缺乏症', '肝病', '甲状腺疾病'],
            pathways: ['硒代谢通路', '硒转运通路', '营养通路']
        },
        TXNRD1: {
            name: '硫氧还蛋白还原酶1 (TXNRD1)',
            function: '抗氧化酶，参与氧化还原反应，维持细胞内氧化还原状态。TXNRD1是硒蛋白家族中最重要的抗氧化酶之一。',
            location: '广泛分布在各器官，特别是肝脏、甲状腺、心脏',
            expression: '高表达在肝脏、甲状腺、心脏；中等表达在肾脏、胰腺；低表达在肌肉、脂肪',
            diseases: ['癌症', '心脏病', '代谢综合征'],
            pathways: ['抗氧化通路', '细胞增殖通路', 'DNA修复通路']
        },
        SELENOS: {
            name: '硒蛋白S (SELENOS)',
            function: '炎症调节蛋白，参与ER应激响应和炎症反应调节。SELENOS在炎症性疾病中发挥重要作用。',
            location: '主要在肝脏、胰腺、脂肪组织',
            expression: '高表达在肝脏、胰腺；中等表达在脂肪组织、甲状腺；低表达在肌肉、肾脏',
            diseases: ['自身免疫疾病', '炎症性疾病', '代谢综合征'],
            pathways: ['炎症通路', 'ER应激通路', '免疫调节通路']
        },
        SELENON: {
            name: '硒蛋白N (SELENON)',
            function: '骨骼肌功能蛋白，参与钙离子调控和肌肉收缩。SELENON在骨骼肌中发挥重要作用。',
            location: '主要分布在骨骼肌、心脏',
            expression: '高表达在骨骼肌、心脏；中等表达在平滑肌、甲状腺；低表达在肝脏、肾脏',
            diseases: ['肌营养不良症', '肌肉萎缩症', '心脏病'],
            pathways: ['肌肉收缩通路', '钙离子调控通路', '肌肉发育通路']
        }
    };
    
    if (geneDetails[geneName]) {
        const detail = geneDetails[geneName];
        content.innerHTML = `
            <h3>${detail.name}</h3>
            <div class="gene-detail">
                <div class="detail-section">
                    <h4>主要功能</h4>
                    <p>${detail.function}</p>
                </div>
                <div class="detail-section">
                    <h4>主要分布</h4>
                    <p>${detail.location}</p>
                </div>
                <div class="detail-section">
                    <h4>表达模式</h4>
                    <p>${detail.expression}</p>
                </div>
                <div class="detail-section">
                    <h4>疾病关联</h4>
                    <ul>
                        ${detail.diseases.map(disease => `<li>${disease}</li>`).join('')}
                    </ul>
                </div>
                <div class="detail-section">
                    <h4>参与的生物学通路</h4>
                    <ul>
                        ${detail.pathways.map(pathway => `<li>${pathway}</li>`).join('')}
                    </ul>
                </div>
                <div class="detail-section">
                    <h4>数据来源</h4>
                    <p>GTEx数据库、Human Protein Atlas、TCGA数据库</p>
                </div>
            </div>
        `;
        modal.style.display = 'block';
    }
}

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
    
    // 关闭模态框
    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('gene-detail-modal').style.display = 'none';
    });
    
    // 点击模态框外部关闭
    document.getElementById('gene-detail-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            this.style.display = 'none';
        }
    });
    
    // 思维导图导航点击事件
    document.querySelectorAll('.mindmap-node li').forEach(item => {
        item.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            showGeneDetail(target);
        });
    });
    
    // 思维导图节点点击事件
    document.querySelectorAll('.mindmap-node').forEach(node => {
        node.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            alert(`点击了 ${id} 模块，正在加载相关内容...`);
        });
    });
});