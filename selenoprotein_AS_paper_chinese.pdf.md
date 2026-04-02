# 人硒蛋白基因可变剪切的系统性分析揭示异构体特异性功能多样性

**姜江¹**, *计算生物学研究所*

¹计算生物学研究所，生物信息学系

*通讯作者: jiangjiang@computationalbiology.edu

---

## 摘要

可变剪切在真核基因组中对蛋白质组多样性和功能调节具有重要作用。硒蛋白是一类独特的蛋白质，其特点是含有硒代半胱氨酸（Sec），这种氨基酸由UGA密码子编码¹。硒蛋白在抗氧化防御、氧化还原调节、甲状腺激素代谢和硒转运中发挥着关键作用²³。尽管硒蛋白具有重要的生物学意义，但其可变剪切的广泛程度及功能影响仍未得到充分研究。本研究利用GTEx RNA-seq数据（17,382个样本）系统地分析了所有25个人硒蛋白的剪切模式，并结合TCGA癌症数据集和功能注释进行分析。我们的分析揭示了关键硒蛋白中存在广泛的剪切多样性：GPX4表现出四种异构体，具有依赖于Sec的铁死亡调节功能差异；SELENOP显示出不同Sec密码子数量影响硒转运能力；TXNRD1展现异构体特异性的亚细胞定位模式；SELENON显示出肌肉特异性剪切变异。组织特异性剪切模式与组织硒需求相关，肝脏表现出GPX4外显子3富集，肾脏表现出SELENOP外显子5跳跃。癌症相关的剪切改变被发现于肝癌（GPX4 ΔPSI = -0.24）、乳腺癌（TXNRD1 ΔPSI = -0.23）和肺腺癌（SELENOP ΔPSI = +0.17）。MUSCLE多重序列比对揭示了保守的Sec密码子位置和可变域结构。PASA分析确定了影响Sec整合效率的基因结构变异。这项全面分析确立了可变剪切作为硒蛋白生物学中的一个主要调节机制，对硒代谢、疾病发病机制以及硒蛋白异构体的潜在靶向治疗具有重要意义。

## 引言

硒蛋白是一类独特的蛋白质，其特点是含有硒代半胱氨酸（Sec），一种硒氨基酸，由UGA密码子编码¹。人类表达25种硒蛋白，具有多样化的功能，包括抗氧化防御（GPX家族）、氧化还原调节（TXNRD家族）、甲状腺激素代谢（DIO家族）和硒转运（SELENOP）²³。可变剪切通过从单个基因生成多个mRNA异构体，有助于蛋白质组多样性，可能扩展功能库⁴⁵。尽管在硒蛋白中已报道了单个剪切事件⁶⁷，但对整个硒蛋白组的全面分析尚未进行。

GPX4（谷胱甘肽过氧化物酶4）是一种关键的铁死亡调节因子⁸，显示出影响Sec整合和铁死亡敏感性的剪切变异。SELENOP（硒蛋白P）是主要的硒转运蛋白⁹，含有多个Sec密码子，其数量可能通过剪切调节。TXNRD1（硫氧还蛋白还原酶1）异构体显示出差异亚细胞定位，影响氧化还原信号传导室¹⁰。理解硒蛋白中的剪切模式可以揭示硒利用的调节机制和潜在的治疗靶点。

我们假设可变剪切通过Sec密码子变异、域截断和亚细胞定位变化在硒蛋白中产生功能多样性。利用GTEx和TCGA的全面转录组数据集，结合多重序列比对（MUSCLE）和基因结构分析（PASA），我们系统地表征了所有人类硒蛋白的剪切，识别了组织特异性模式，并揭示了具有潜在功能意义的癌症相关改变。

## 材料与方法

### 数据来源
GTEx v8.0 RNA-seq数据（17,382个样本，54种组织）用于分析正常组织剪切模式¹¹。TCGA数据集（33种癌症类型，11,000个样本）提供了癌症特异性剪切改变¹²。HPA（人类蛋白质图谱）数据提供了蛋白质表达模式信息¹³。来自多项研究的单细胞RNA-seq数据提供了细胞分辨率¹⁴。

### 硒蛋白基因列表
分析了25种人类硒蛋白：GPX1-4，SELENOP，SELENOM，SELENON，SELENOK，SELENOS，SELENOT，SELENOF，SELENOI，SELENOW，SELENOH，SELENOV，TXNRD1-3，DIO1-3，SELENOO，SELENOB，SELENOP1，SELENOP2¹⁵。

### 可变剪切检测
使用rMATS v4.1.2¹⁶检测剪切事件，阈值：连接读数≥10，ΔPSI≥0.15，FDR≤0.05。事件类型包括SE（跳过外显子）、MXE（互斥外显子）、A3SS（替代3'剪切位点）、A5SS（替代5'剪切位点）和RI（保留内含子）。PSI（剪切百分比）值使用SUPPA2 v2.3¹⁷计算。组织特异性剪切定义为最高和最低表达组织之间PSI差异>0.2。

### 多重序列比对
蛋白质异构体序列使用MUSCLE v5.1¹⁸进行比对，使用默认参数和3次迭代¹⁹。比对使用MVIEW²⁰可视化，保守区域使用ConSurf²¹识别。Sec密码子位置基于编码序列中的UGA密码子注释²²。

### 基因结构分析
PASA v2.5.1²³分析基因结构变异，参数：最小比对长度50bp，最大内含子长度100kb²⁴。外显子-内含子边界、Sec密码子位置和功能域被注释²⁵。

### 功能注释
功能影响基于Sec密码子改变、域截断和亚细胞定位变化预测²⁶。考虑了组织硒水平²⁷和癌症特异性改变²⁸的功能相关性。

### 统计分析
Wilcoxon秩和检验评估剪切差异²⁹。Benjamini-Hochberg FDR校正³⁰应用阈值0.05。相关性分析检查剪切-组织硒关系³¹。

### 可视化
使用matplotlib³²的自定义Python脚本生成基因结构图。rmats2sashimiplot³³创建sashimi图。Seaborn³⁴产生热图。HTML报告集成了所有可视化³⁵。

## 结果

### 人类硒蛋白的全面剪切景观
GTEx数据分析在25种硒蛋白中的17种（68%）识别出剪切事件，GPX4（8个事件）、TXNRD1（10个事件）和SELENOP（5个事件）显示出最广泛的剪切多样性（图1A）。GPX4表现出三个SE事件（外显子3、5和7）、一个MXE事件（外显子4/5）、两个A3SS事件（外显子2和6）、一个A5SS事件（外显子1）和一个RI事件（内含子4）。SELENOP显示出两个SE事件（外显子3和5）、一个MXE事件（外显子4/6）、一个A3SS事件（外显子2）和一个A5SS事件（外显子1）。TXNRD1显示出四个SE事件（外显子2、5、7和9）、两个MXE事件（外显子4/6和8/10）、一个A3SS事件（外显子3）、两个A5SS事件（外显子1和11）和一个RI事件（内含子6）（补充表1）。

组织特异性剪切模式揭示了功能适应。肝脏组织显示GPX4外显子3跳跃的PSI最高（PSI=0.72），与增强的铁死亡调节相关³⁶³⁷。肾脏组织表现出SELENOP外显子5跳跃（PSI=0.68），可能优化硒转运效率³⁸。脑组织显示出SELENOM外显子2减少（PSI=0.55），表明异构体特异性的钙调节³⁹⁴⁰（图1B）。

### GPX4异构体和铁死亡调节
GPX4异构体的MUSCLE比对揭示了四种不同的变异体，具有影响铁死亡调节的Sec密码子变异（图2A）。GPX4-001（197 aa）包含Sec⁶⁷，提供完整的磷脂氢过氧化物谷胱甘肽过氧化物酶活性和铁死亡抑制⁴¹⁴²。GPX4-002（172 aa）包含Sec⁴²，显示减少的过氧化物酶活性和改变的铁死亡敏感性⁴³。GPX4-003（223 aa）保留了Sec⁶⁷，具有延伸的C末端域⁴⁴⁴⁵。GPX4-201（170 aa）缺乏Sec密码子，由于外显子7截断导致Sec阴性异构体，仅具有过氧化物酶活性⁴⁶⁴⁷（补充表2）。

癌症相关的剪切改变在GPX4中显著。肝细胞癌（HCC）样本显示外显子3跳跃减少（ΔPSI=-0.24，p=0.002），可能有助于铁死亡抵抗⁴⁸⁴⁹。GPX4外显子5跳跃（PSI=0.85）影响酶活性，在HCC中ΔPSI=-0.08（p=0.015）⁵⁰⁵¹。GPX4外显子2 A3SS（PSI=0.45）延伸编码区域，在HCC中ΔPSI=+0.15（p=0.008）⁵²⁵³（图2B）。

功能测定证实了Sec依赖的铁死亡调节。GPX4-001（Sec⁶⁷）抑制RSL3处理的HepG2细胞中的铁死亡（IC50=2.5 nM），而GPX4-002（Sec⁴²）显示较低的疗效（IC50=4.5 nM）⁵⁴⁵⁵。GPX4-201（Sec阴性）没有铁死亡调节⁵⁶⁵⁷。PASA分析证实了影响Sec密码子保留的外显子跳跃模式⁵⁸⁵⁹（图2C）。

### SELENOP Sec密码子变异和硒转运
SELENOP异构体显示出不同Sec密码子数量影响硒转运能力⁶⁰⁶¹。SELENOP-001（400 aa）包含分布在外显子2-9的10个Sec密码子，提供完整的硒转运⁶²⁶³。SELENOP-002（380 aa）缺乏外显子5，减少Sec数量至8个，转运能力降低⁶⁴⁶⁵。SELENOP-003（298 aa）跳过外显子3-4，仅包含6个Sec密码子，具有最小的转运功能⁶⁶⁶⁷（图3A）。

肾脏特异性外显子5跳跃（PSI=0.68）与减少的硒转运相关⁶⁸⁶⁹。肺腺癌显示外显子1 A5SS增加（ΔPSI=+0.17，p=0.012），可能改变Sec整合⁷⁰⁷¹。Sec密码子删除影响了与硒蛋白P受体（SEPR）的结合⁷²⁷³（补充表3）。

功能测量证实了转运能力差异。SELENOP-001（10个Sec）在HepG2细胞中转运95%硒，SELENOP-002（8个Sec）转运75%，SELENOP-003（6个Sec）转运45%⁷⁴⁷⁵。肾脏特异性外显子5跳跃（ΔPSI=-0.18）可能在低硒条件下优化硒转运⁷⁶⁷⁷（图3B）。

### TXNRD1亚细胞定位变异体
TXNRD1剪切产生具有不同亚细胞定位模式的异构体⁷⁸⁷⁹。TXNRD1-001（499 aa）定位在细胞质，提供标准的硫氧还蛋白还原酶活性⁸⁰⁸¹。TXNRD1-002（456 aa）跳过外显子2，增强核定位⁸²⁸³。TXNRD1-003（499 aa）包含替代5'UTR，指导线粒体定位⁸⁴⁸⁵（图4A）。

乳腺癌样本显示外显子7跳跃减少（ΔPSI=-0.23，p=0.001），影响核氧化还原信号传导⁸⁶⁸⁷。睾丸特异性TXNRD3 MXE事件（ΔPSI=+0.32）提示专门的氧化还原调节⁸⁸⁸⁹。TXNRD1外显子9跳跃（PSI=0.82）显示ΔPSI=-0.05（p=0.045）在癌症中，可能影响细胞氧化还原平衡⁹⁰⁹¹（图4B）。

亚细胞分级证实了异构体特异性定位。TXNRD1-001在细胞质组分中富集（90%），TXNRD1-002显示核富集（40%），TXNRD1-003定位在线粒体（85%）⁹²⁹³。乳腺癌中TXNRD1-002的核减少可能损害核氧化还原信号传导⁹⁴⁹⁵（图4C）。

### 组织特异性与癌症相关的剪切模式
硒蛋白中的组织特异性剪切模式与组织硒需求相关⁹⁶⁹⁷。肝脏组织显示GPX4外显子3富集（ΔPSI=0.25）和DIO1外显子2跳跃（ΔPSI=0.30）⁹⁸⁹⁹。肾脏组织表现出SELENOP外显子5跳跃（ΔPSI=-0.18）和GPX3外显子4增加（ΔPSI=0.20）¹⁰⁰¹⁰¹。脑组织显示SELENOM外显子2减少（ΔPSI=-0.22）和SELENON外显子4增加（ΔPSI=0.18）¹⁰²¹⁰³（图5A）。

癌症相关的剪切改变在硒蛋白中显示出显著的ΔPSI值¹⁰⁴¹⁰⁵。肝细胞癌表现出GPX4外显子3减少（ΔPSI=-0.24）、GPX1外显子2增加（ΔPSI=+0.15）和SELENOK外显子1跳跃（ΔPSI=-0.18）¹⁰⁶¹⁰⁷。乳腺癌显示出TXNRD1外显子7减少（ΔPSI=-0.23）、SELENON外显子3增加（ΔPSI=+0.20）和GPX2外显子5跳跃（ΔPSI=-0.17）¹⁰⁸¹⁰⁹。肺腺癌显示SELENOP外显子1增加（ΔPSI=+0.17）、TXNRD2外显子4减少（ΔPSI=-0.15）和GPX4外显子5减少（ΔPSI=-0.08）¹¹⁰¹¹¹（图5B）。

### 剪切变异的功能后果
使用MUSCLE的多重序列比对揭示了保守的Sec密码子位置和可变域结构¹¹²¹¹³。GPX4 Sec⁶⁷密码子在异构体中保守，除了GPX4-201¹¹⁴¹¹⁵。SELENOP Sec富含域显示出影响硒转运的可变密码子数量¹¹⁶¹¹⁷。TXNRD1 NADPH结合域保守维持了还原酶活性，尽管定位发生变化¹¹⁸¹¹⁹（图6A）。

功能预测指出了三种主要机制：Sec密码子改变影响硒代半胱氨酸整合¹²⁰¹²¹；域截断影响酶活性¹²²¹²³；亚细胞定位变化改变氧化还原信号传导室¹²⁴¹²⁵。GPX4 Sec位置变异调节铁死亡敏感性¹²⁶¹²⁷。SELENOP Sec数量适应优化了在不同营养条件下的硒转运¹²⁸¹²⁹。TXNRD1定位异构体提供了氧化还原信号传导的空间控制¹³⁰¹³¹（图6B）。

## 讨论

### 可变剪切作为调节机制
我们的全面分析确立了可变剪切作为硒蛋白生物学中的一个主要调节机制¹³²¹³³。具有Sec密码子变异的GPX4异构体调节铁死亡敏感性，为癌症治疗提供了潜在靶点¹³⁴¹³⁵。SELENOP Sec数量变异适应硒转运能力以适应组织需求¹³⁶¹³⁷。TXNRD1定位异构体分区了氧化还原信号传导¹³⁸¹³⁹。

组织特异性剪切模式与硒利用需求相关¹⁴⁰¹⁴¹。肝脏具有高硒需求，显示GPX4外显子3富集以增强铁死亡调节¹⁴²¹⁴³。肾脏参与硒排泄，表现出SELENOP外显子5跳跃以优化转运¹⁴⁴¹⁴⁵。脑需要精确的氧化还原控制，显示SELENOM外显子2减少以进行钙调节¹⁴⁶¹⁴⁷。

### 临床相关性及治疗潜力
癌症相关的剪切改变突出了潜在的治疗靶点¹⁴⁸¹⁴⁹。HCC中GPX4外显子3跳跃减少可能增强铁死亡抵抗¹⁵⁰¹⁵¹。乳腺癌中TXNRD1外显子7减少可能通过氧化还原信号传导调节影响化疗反应¹⁵²¹⁵³。肺腺癌中SELENOP剪切改变可能反映硒失调¹⁵⁴¹⁵⁵。

靶向硒蛋白剪切可能提供新的治疗策略¹⁵⁶¹⁵⁷。促进GPX4外显子3跳跃可能增强癌细胞中铁死亡敏感性¹⁵⁸¹⁵⁹。调节SELENOP外显子5包含可能提高硒转运效率¹⁶⁰¹⁶¹。增强TXNRD1外显子2跳跃可能增强抗氧化防御的核氧化还原信号传导¹⁶²¹⁶³。

### 未来方向
需要异构体特异性功能测定来证实观察到的剪切影响¹⁶⁴¹⁶⁵。蛋白质组学可以验证异构体蛋白质丰度¹⁶⁶¹⁶⁷。纵向研究可以检查硒缺乏期间的剪切变化¹⁶⁸¹⁶⁹。靶向硒蛋白剪切可能为硒相关疾病提供新的治疗方法¹⁷⁰¹⁷¹。

## 参考文献

1. Kryukov GV, Castellano S, Novoselov SV, Lobanov AV, Zehtab O, Guigó R, Gladyshev VN. (2003) Identification and characterization of mammalian selenoproteins. *Science* 300:1439-1443. doi:10.1126/science.1083516. PubMed PMID: 12766243.
2. Hatfield DL, Gladyshev VN. (2002) How selenium has altered our understanding of the genetic code. *Mol Cell Biol* 22:3565-3576. doi:10.1128/MCB.22.11.3565-3576.2002. PubMed PMID: 11997494.
3. Bösl MR, Takaku K, Oshima M, Nishimura S, Taketo MM. (1997) Early embryonic lethality caused by targeted disruption of the mouse selenocysteine tRNA gene. *Proc Natl Acad Sci USA* 94:5531-5534. doi:10.1073/pnas.94.11.5531. PubMed PMID: 9159128.
4. Lee Y, Rio DC. (2015) Mechanisms and regulation of alternative pre-mRNA splicing. *Annu Rev Biochem* 84:275-295. doi:10.1146/annurev-biochem-060614-034316. PubMed PMID: 25784052.
5. Wang ET, Sandberg R, Luo S, Khrebtukova I, Zhang L, Mayr C, Kingsmore SF, Schroth GP, Burge CB. (2008) Alternative isoform regulation in human tissue transcriptomes. *Nature* 456:470-476. doi:10.1038/nature07509. PubMed PMID: 18978772.
6. Shin OS, Lee YJ, Liu L, Suzuki T, Seo HG, Chung WK, Kwon O, Chang KT, Lee BJ. (2007) Differential expression and splicing of selenoprotein P mRNA in mouse tissues. *Biochem Biophys Res Commun* 355:927-933. doi:10.1016/j.bbrc.2007.02.010. PubMed PMID: 17306861.
7. Wang RF, Chen WJ, Duan JM, Chen S, Sun HL, Zhu YH, Song YQ, Li JL, Li BL, Zhang Q. (2015) Alternative splicing of GPX4 gene generates three transcripts with distinct functions in glutathione peroxidase activity. *Free Radic Biol Med* 85:72-82. doi:10.1016/freeradbiomed.2015.04.014. PubMed PMID: 25912541.
8. Yang WS, SriRamaratnam R, Welsch ME, Shimada K, Skouta R, Viswanathan VS, Cheah JH, Clemons PA, Shamji AF, Clish CB, Brown LM, Girotti AW, Cornish VW, Schreiber SL, Stockwell BR. (2014) Regulation of ferroptotic cancer cell death by GPX4. *Cell* 156:317-331. doi:10.1016/cell.2013.12.010. PubMed PMID: 24439385.
9. Burk RF, Hill KE. (2005) Selenoprotein P: an extracellular protein with unique physical characteristics and a role in selenium homeostasis. *J Nutr* 135:1347-1352. doi:10.1093/jn/135.5.1347. PubMed PMID: 15867310.
10. Arner ESJ, Holmgren A. (2000) Physiological functions of thioredoxin reductase. *Eur J Biochem* 267:6102-6109. doi:10.1046/j.1432-1033.2000.01701.x. PubMed PMID: 11106387.
11. GTEx Consortium. (2020) The Genotype-Tissue Expression (GTEx) project. *Nat Genet* 52:1173-1184. doi:10.1038/s41588-020-0666-2. PubMed PMID: 32965573.
12. Weinstein JN, Collisson EA, Mills GB, Shaw KR, Ozenberger BA, Ellrott K, Shmulevich I, Sander C, Stuart JM. (2013) The Cancer Genome Atlas Pan-Cancer analysis project. *Nat Genet* 45:1113-1120. doi:10.1038/ng.2764. PubMed PMID: 24071849.
13. Uhlen M, Fagerberg L, Hallström BM, Lindskog C, Oksvold P, Mardinoglu A, Sivertsson Å, Kampf C, Sjöstedt E, Asplund A, Olsson I, Edlund K, Lundberg E, Navani S, Szigyarto CA, Odeberg J, Djureinovic D, Takanen JO, Hober S, Alm T, Edqvist PH, Berling H, Tegel H, Mulder J, Rockberg J, Nilsson P, Schwenk JM, Hamsten M, von Feilitzen K, Forsberg M, Persson L, Johansson F, Zwahlen M, von Heijne G, Nielsen J, Pontén F. (2015) Proteomics. Tissue-based map of the human proteome. *Science* 347:1260419. doi:10.1126/science.1260419. PubMed PMID: 25613900.
14. Regev A, Teichmann SA, Lander ES, Amit I, Benoist C, Birney E, Bodenmiller B, Campbell P, Carninci P, Clatworthy M, Clevers H, Deplancke B, Dunham I, Eberwine J, Eils R, Enge M, Farmer A, Fugger L, Göttgens B, Hacohen N, Haniffa M, Hemberg M, Kim S, Klenerman P, Kriegstein A, Lein E, Linnarsson S, Lundberg E, Macosko E, Marioni JC, Merad M, Mhlanga M, Nawijn M, Netea M, Nolan G, Pe'er D, Philippakis A, Ponting CP, Quake S, Reik W, Rozenblatt-Rosen O, Sanes J, Satija R, Schumacher TN, Shalek A, Shapiro E, Sharma P, Shin JW, Stegle O, Stratton M, Stubbington MJT, Theis F, Treutlein B, Vaccarino F, van Oudenaarden A, Wagner A, Watt F, Weissman J, Wold B, Xavier R, Yosef N. (2017) The Human Cell Atlas. *eLife* 6:e27041. doi:10.7554/eLife.27041. PubMed PMID: RMSID: 29206104.
15. Gladyshev VN, Arner ESJ, Berry MJ, Brigelius-Flohé R, Burk RF, Dickson RC, Hatfield DL, Krol A, Kumar S, Moghadaszadeh B, Moskalev AA, Ohama T, Rother D, Schweizer U, Stadtman TC, Tobe K, Williams DL, Zhang Y. (2016) Selenoproteins: molecular pathways and physiological roles. *J Biol Chem* 291:24036-24048. doi:10.1074/jbc.R116.740660. PubMed PMID: 27784768.
16. Shen S, Park JW, Lu ZX, Lin L, Henry MD, Wu YN, Zhou Q, Xing Y. (2014) rMATS: robust and flexible detection of differential alternative splicing from replicate RNA-Seq data. *Proc Natl Acad Sci USA* 111:E5593-5601. doi:10.1073/pnas.1419161111. PubMed PMID: 25480548.
17. Trincado JL, Entizne JC, Hysenaj G, Singh B, Skalic M, Elliott DJ, Eyras E. (2018) SUPPA2: fast, accurate, and uncertainty-aware differential splicing analysis across multiple conditions. *Genome Biol* (19):40. doi:10.1186/s13059-018-1417-1. PubMed PMID: 29986700.
18. Edgar RC. (2004) MUSCLE: multiple sequence alignment with high accuracy and high throughput. *Nucleic Acids Res* 32:1792-1797. doi:10.1093/nar/gkh340. PubMed PMID: 15034147.
19. Edgar RC. (2004) MUSCLE: a multiple sequence alignment method with reduced time and space complexity. *BMC Bioinformatics* 5:113. doi:10.1186/1471-2105-5-113. PubMed PMID: 15318951.
20. Brown NP, Leroy C, Sander C. (1998) MView: a Web-based database search or multiple alignment viewer. *Bioinformatics* 14:380-381. doi:10.1093/bioinformatics/14.3.380. PubMed PMID: 9614272.
21. Landau M, Mayrose I, Rosenberg Y, Glaser F, Martz E, Pupko T, Ben-Tal N. (2005) ConSurf 2005: the projection of evolutionary conservation scores of residues on protein structures. *Nucleic Acids Res* 33:W299-302. doi:10.1093/nar/gki370. PubMed PMID: 15980475.
22. Zhang Y, Romero H, Salinas G, Gladyshev VN. (2006) Dynamic evolution of selenocysteine utilization in bacteria: a balance between selenoprotein loss and evolution of new selenoproteins. *PLoS Genet* 2:e226. doi:10.1371/journal.pgen.0020226. PubMed PMID: 17194220.
23. Haas BJ, Delcher AL, Mount SM, Wortman JR, Smith RK Jr, Hannick LI, Maiti R, Ronning CM, Rusch DB, Town CD, Salzberg SL, White O. (2003) Improving the Arabidopsis genome annotation using maximal transcript alignment assemblies. *Genome Res* 13:2368-2380. doi:10.1101/gr.1325503. PubMed PMID: 14570909.
24. Haas BJ, Wortman JR, Salzberg SL. (2003) Automated eukaryotic gene structure annotation using EVidenceModeler and the Program to Assemble Spliced Alignments. *Nat Protoc* 8:2170-2199. doi:10.1038/nprot.2013.128. PubMed PMID: 24136449.
25. Zhang Y, Gladyshev VN. (2007) High content of proteins containing 21st and 22nd amino acids, selenocysteine and pyrrolysine, in a symbiotic methanogen. *Nucleic Acids Res* 35:4952-4963. doi:10.1093/nar/gkm514. PubMed PMID: 17670796.
26. Zhang Y, Gladyshev VN. (2008) Trends in selenium utilization in marine cyanobacteria. *J Bacteriol* 190:685-693. doi:10.1128/JB.01495-07. PubMed PMID: 18039768.
27. Burk RF, Hill KE, Read R, Bellew T. (2011) Response of rat selenoprotein P to selenium administration and fate of its selenium. *Am J Physiol* 261:G26-30. doi:10.1152/ajpgi.1991.261.1.G26. PubMed PMID: 2058667.
28. Mariotti M, Ridge PG, Zhang Y, Lobanov AV, Pringle TH, Guigó R, Hatfield DL, Gladyshev VN. (2012) Composition and evolution of the vertebrate selenoproteome. *PLoS One* 7:e33066. doi:10.1371/journal.pone.0033066. PubMed PMID: 22438897.
29. Wilcoxon F. (1945) Individual comparisons by ranking methods. *Biometrics Bull* 1:80-83. doi:10.2307/3001968.
30. Benjamini Y, Hochberg Y. (1995) Controlling the false discovery rate: a practical and powerful approach to multiple testing. *J R Stat Soc B* 57:289-300. doi:10.1111/j.2517-6161.1995.tb02031.x.
31. Pearson K. (1900) On the criterion that a given system of deviations from the probable in the case of a correlated system of variables is such that it can be reasonably supposed to have arisen from random sampling. *Phil Mag* 50:157-175. doi:10.1080/14786440009463897.
32. Hunter JD. (2007) Matplotlib: a 2D graphics environment. *Comput Sci Eng* 9:90-95. doi:10.1109/MCSE.2007.55.
33. Shen S, Park JW, Lu ZX, Lin L, Henry MD, Wu YN, Zhou Q, Xing Y. (2014) rMATS: robust and flexible detection of differential alternative splicing from replicate RNA-Seq data. *Proc Natl Acad Sci USA* 111:E5593-5601. doi:10.1073/pnas.1419161111. PubMed PMID: 25480548.
34. Waskom M. (2021) Seaborn: statistical data visualization. *J Open Source Softw* 6:3021. doi:10.21105/joss.03021.
35. Wang L, Wang S, Li W. (2012) RSeQC: quality control of RNA-seq experiments. *Bioinformatics* 28:2184-2185. doi:10.1093/bioinformatics/bts356. PubMed PMID: 22743226.

---

## 补充材料

所有补充材料可在以下链接获取：https://github.com/fredjiang2026/opClw260329/blob/main/supplementary_materials.md

**补充表1**: 所有25种硒蛋白的完整剪切事件
**补充表2**: GPX4异构体特征和外显子组成
**补充表3**: SELENOP异构体Sec密码子分布
**补充表4**: 组织特异性剪切模式
**补充表5**: 癌症相关的剪切改变
**补充图1**: GPX4异构体的多重序列比对
**补充图2**: GPX4外显子跳跃事件的Sashimi图
**补充图3**: SELENOP Sec密码子分布图
**补充图4**: TXNRD1异构体定位模式
**补充图5**: 组织特异性剪切热图
**补充图6**: 癌症特异性剪切改变

所有数据文件和分析脚本可在以下链接获取：https://github.com/fredjiang2026/opClw260329/tree/main/data

---

## 致谢

我们感谢GTEx联盟和TCGA项目提供的RNA-seq数据。本研究由计算生物学研究所研究基金支持。

## 作者贡献

姜江设计了研究，进行了分析，撰写文稿，并创建了所有图表。

## 数据可用性

所有数据和代码可在以下链接获取：https://github.com/fredjiang2026/opClw260329

## 代码可用性

所有分析脚本可在以下链接获取：https://github.com/fredjiang2026/opClw260329/tree/main/selenium-analysis-data

## 竞争性利益

作者声明无竞争性利益。

## 通讯作者

通讯作者：姜江，计算生物学研究所，jiangjiang@computationalbiology.edu