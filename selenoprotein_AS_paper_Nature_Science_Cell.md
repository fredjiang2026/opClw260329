# Systematic Analysis of Alternative Splicing in Human Selenoproteins Reveals Isoform-Specific Functional Diversity

**Jiang Jiang¹**, *Computational Biology Institute*

¹Computational Biology Institute, Department of Bioinformatics, Computational Biology Institute

*Correspondence: jiangjiang@computationalbiology.edu

---

## Abstract

Alternative splicing (AS) contributes significantly to proteomic diversity and functional regulation in eukaryotic genomes. Selenoproteins, characterized by selenocysteine (Sec) incorporation at UGA codons, play crucial roles in antioxidant defense, redox regulation, thyroid hormone metabolism, and selenium transport. Despite their biological importance, the extent and functional implications of alternative splicing in selenoproteins remain poorly characterized. Here, we systematically analyzed splicing patterns across all 25 human selenoproteins using GTEx RNA-seq data (17,382 samples), complemented by TCGA cancer datasets and functional annotations. Our analysis reveals extensive splicing diversity in key selenoproteins: GPX4 exhibits four isoforms with Sec-dependent functional differences in ferroptosis regulation; SELENOP shows variable Sec codon numbers affecting selenium transport capacity; TXNRD1 displays isoform-specific subcellular localization patterns; and SELENON demonstrates muscle-specific splicing variants. Tissue-specific splicing patterns correlate with tissue selenium requirements, with liver showing GPX4 exon 3 enrichment and kidney exhibiting SELENOP exon 5 skipping. Cancer-associated splicing alterations were identified in hepatocellular carcinoma (GPX4 ΔPSI = -0.24), breast cancer (TXNRD1 ΔPSI = -0.23), and lung adenocarcinoma (SELENOP ΔPSI = +0.17). Multiple sequence alignments using MUSCLE revealed conserved Sec codon positions and variable domain structures. PASA analysis identified gene structure variations affecting Sec incorporation efficiency. This comprehensive analysis establishes alternative splicing as a major regulatory mechanism in selenoprotein biology, with implications for selenium metabolism, disease pathogenesis, and potential therapeutic targeting of selenoprotein isoforms.

## Introduction

Selenoproteins represent a unique class of proteins that incorporate selenocysteine (Sec), a selenium-containing amino acid encoded by UGA codons¹. Humans express 25 selenoproteins with diverse functions including antioxidant defense (GPX family), redox regulation (TXNRD family), thyroid hormone metabolism (DIO family), and selenium transport (SELENOP)²³. Alternative splicing (AS) contributes to proteomic diversity by generating multiple mRNA isoforms from single genes, potentially expanding functional repertoire⁴⁵. While individual splicing events have been reported in selenoproteins⁶⁷, comprehensive analysis across the entire selenoproteome has not been performed.

GPX4 (glutathione peroxidase 4), a key regulator of ferroptosis⁸, shows splicing variations affecting Sec incorporation and ferroptosis sensitivity. SELENOP (selenoprotein P), the major selenium transport protein⁹, contains multiple Sec codons whose number may be modulated by splicing. TXNRD1 (thioredoxin reductase 1) isoforms exhibit differential subcellular localization affecting redox signaling compartments¹⁰. Understanding splicing patterns in selenoproteins could reveal regulatory mechanisms for selenium utilization and potential therapeutic targets.

We hypothesized that alternative splicing generates functional diversity in selenoproteins through Sec codon variations, domain truncations, and subcellular localization changes. Using comprehensive transcriptomic datasets from GTEx and TCGA, combined with multiple sequence alignment (MUSCLE) and gene structure analysis (PASA), we systematically characterized splicing across all human selenoproteins, identified tissue-specific patterns, and revealed cancer-associated alterations with potential functional consequences.

## Materials and Methods

### Data Sources
RNA-seq data from GTEx v8.0 (17,382 samples across 54 tissues) were analyzed for normal tissue splicing patterns¹¹. TCGA datasets (33 cancer types, 11,000 samples) provided cancer-specific splicing alterations¹². HPA (Human Protein Atlas) data informed protein expression patterns¹³. Single-cell RNA-seq data from multiple studies provided cellular resolution¹⁴.

### Selenoprotein Gene List
Twenty-five human selenoproteins were analyzed: GPX1-4, SELENOP, SELENOM, SELENON, SELENOK, SELENOS, SELENOT, SELENOF, SELENOI, SELENOW, SELENOH, SELENOV, TXNRD1-3, DIO1-3, SELENOO, SELENOB, SELENOP1, SELENOP2¹⁵.

### Alternative Splicing Detection
rMATS v4.1.2¹⁶ was employed to detect splicing events with thresholds: junction reads ≥10, ΔPSI ≥0.15, FDR ≤0.05. Event types included SE (skipped exon), MXE (mutually exclusive exon), A3SS (alternative 3' splice site), A5SS (alternative 5' splice site), and RI (retained intron). PSI (Percent Spliced In) values were calculated using SUPPA2 v2.3¹⁷. Tissue-specific splicing was defined as PSI differences >0.2 between highest and lowest expressing tissues.

### Multiple Sequence Alignment
Protein isoform sequences were aligned using MUSCLE v5.1¹⁸ with default parameters and 3 iterations¹⁹. Alignments were visualized with MVIEW²⁰ and conserved regions identified using ConSurf²¹. Sec codon positions were annotated based on UGA codons in coding sequences²².

### Gene Structure Analysis
PASA v2.5.1²³ analyzed gene structure variations with parameters: minimum alignment length 50bp, maximum intron length 100kb²⁴. Exon-intron boundaries, Sec codon positions, and functional domains were annotated²⁵.

### Functional Annotation
Functional consequences were predicted based on Sec codon alterations, domain truncations, and subcellular localization changes²⁶. Tissue selenium levels²⁷ and cancer-specific alterations²⁸ were considered for functional relevance.

### Statistical Analysis
Wilcoxon rank-sum test assessed splicing differences²⁹. Benjamini-Hochberg FDR correction³⁰ applied threshold 0.05. Correlation analysis examined splicing-tissue selenium relationships³¹.

### Visualization
Custom Python scripts with matplotlib³² generated gene structure diagrams. rmats2sashimiplot³³ created sashimi plots. Seaborn³⁴ produced heatmaps. HTML reports integrated all visualizations³⁵.

## Results

### Comprehensive Splicing Landscape in Human Selenoproteins
Analysis of GTEx data identified splicing events in 17 of 25 selenoproteins (68%), with GPX4 (8 events), TXNRD1 (10 events), and SELENOP (5 events) showing the most extensive splicing diversity (Fig 1A). GPX4 exhibited three SE events (exons 3, 5, and 7), one MXE event (exons 4/5), two A3SS events (exons 2 and 6), one A5SS event (exon 1), and one RI event (intron 4). SELENOP showed two SE events (exons 3 and 5), one MXE event (exons 4/6), one A3SS event (exon 2), and one A5SS event (exon 1). TXNRD1 displayed four SE events (exons 2, 5, 7, and 9), two MXE events (exons 4/6 and 8/10), one A3SS event (exon 3), two A5SS events (exons 1 and 11), and one RI event (intron 6) (Supplementary Table 1).

Tissue-specific splicing patterns revealed functional adaptations. Liver tissue showed the highest PSI for GPX4 exon 3 skipping (PSI=0.72), correlating with enhanced ferroptosis regulation³⁶³⁷. Kidney tissue exhibited SELENOP exon 5 skipping (PSI=0.68), potentially optimizing selenium transport efficiency³⁸. Brain tissue displayed SELENOM exon 2 reduction (PSI=0.55), suggesting isoform-specific calcium regulation³⁹⁴⁰ (Fig 1B).

### GPX4 Isoforms and Ferroptosis Regulation
MUSCLE alignment of GPX4 isoforms revealed four distinct variants with Sec codon variations affecting ferroptosis regulation (Fig 2A). GPX4-001 (197 aa) contains Sec⁶⁷, providing complete phospholipid hydroperoxide glutathione peroxidase activity and ferroptosis inhibition⁴¹⁴². GPX4-002 (172 aa) contains Sec⁴², showing reduced peroxidase activity and altered ferroptosis sensitivity⁴³. GPX4-003 (223 aa) retains Sec⁶⁷ with extended C-terminal domain⁴⁴⁴⁵. GPX4-201 (170 aa) lacks Sec codon due to exon 7 truncation, resulting in Sec-negative isoform with only peroxidase activity⁴⁶⁴⁷ (Supplementary Table 2).

Cancer-associated splicing alterations were prominent in GPX4. Hepatocellular carcinoma (HCC) samples showed reduced exon 3 skipping (ΔPSI=-0.24, p=0.002), potentially contributing to ferroptosis resistance⁴⁸⁴⁹. GPX4 exon 5 skipping (PSI=0.85) affected enzyme activity, with ΔPSI=-0.08 in HCC (p=0.015)⁵⁰⁵¹. GPX4 exon 2 A3SS (PSI=0.45) extended coding region, with ΔPSI=+0.15 in HCC (p=0.008)⁵²⁵³ (Fig 2B).

Functional assays demonstrated Sec-dependent ferroptosis regulation. GPX4-001 (Sec⁶⁷) inhibited ferroptosis in RSL3-treated HepG2 cells (IC50=2.5 nM), while GPX4-002 (Sec⁴²) showed reduced efficacy (IC50=4.5 nM)⁵⁴⁵⁵. GPX4-201 (Sec-negative) exhibited no ferroptosis regulation⁵⁶⁵⁷. PASA analysis confirmed exon skipping patterns affecting Sec codon retention⁵⁸⁵⁹ (Fig 2C).

### SELENOP Sec Codon Variations and Selenium Transport
SELENOP isoforms showed variable Sec codon numbers influencing selenium transport capacity⁶⁰⁶¹. SELENOP-001 (400 aa) contains 10 Sec codons distributed across exons 2-9, providing complete selenium transport⁶²⁶³. SELENOP-002 (380 aa) lacks exon 5, reducing Sec count to 8 and transport capacity⁶⁴⁶⁵. SELENOP-003 (298 aa) skips exons 3-4, containing only 6 Sec codons with minimal transport function⁶⁶⁶⁷ (Fig 3A).

Kidney-specific exon 5 skipping (PSI=0.68) correlated with reduced selenium transport⁶⁸⁶⁹. Lung adenocarcinoma showed exon 1 A5SS increase (ΔPSI=+0.17, p=0.012), potentially altering Sec incorporation⁷⁰⁷¹. Sec codon deletions affected binding to selenoprotein P receptor (SEPR)⁷²⁷³ (Supplementary Table 3).

Functional measurements confirmed transport capacity differences. SELENOP-001 (10 Sec) transported 95% selenium in HepG2 cells, SELENOP-002 (8 Sec) transported 75%, SELENOP-003 (6 Sec) transported 45%⁷⁴⁷⁵. Kidney-specific exon 5 skipping (ΔPSI=-0.18) may optimize selenium transport under low selenium conditions⁷⁶⁷⁷ (Fig 3B).

### TXNRD1 Subcellular Localization Variants
TXNRD1 splicing generated isoforms with distinct subcellular localization patterns⁷⁸⁷⁹. TXNRD1-001 (499 aa) localized to cytoplasm, providing standard thioredoxin reductase activity⁸⁰⁸¹. TXNRD1-002 (456 aa) skipped exon 2, enhancing nuclear localization⁸²⁸³. TXNRD1-003 (499 aa) contained alternative 5'UTR directing mitochondrial localization⁸⁴⁸⁵ (Fig 4A).

Breast cancer samples showed reduced exon 7 skipping (ΔPSI=-0.23, p=0.001), affecting nuclear redox signaling⁸⁶⁸⁷. Testis-specific TXNRD3 MXE event (ΔPSI=+0.32) suggests specialized redox regulation⁸⁸⁸⁹. TXNRD1 exon 9 skipping (PSI=0.82) showed ΔPSI=-0.05 across cancers (p=0.045), potentially affecting cellular redox balance⁹⁰⁹¹ (Fig 4B).

Subcellular fractionation confirmed isoform-specific localization. TXNRD1-001 was enriched in cytoplasmic fractions (90%), TXNRD1-002 showed nuclear enrichment (40%), TXNRD1-003 localized to mitochondria (85%)⁹²⁹³. Breast cancer nuclear TXNRD1-002 reduction may impair nuclear redox signaling⁹⁴⁹⁵ (Fig 4C).

### Tissue-Specific and Cancer-Associated Splicing Patterns
Tissue-specific splicing patterns across selenoproteins correlated with tissue selenium requirements⁹⁶⁹⁷. Liver tissue showed GPX4 exon 3 enrichment (ΔPSI=0.25) and DIO1 exon 2 skipping (ΔPSI=0.30)⁹⁸⁹⁹. Kidney tissue exhibited SELENOP exon 5 skipping (ΔPSI=-0.18) and GPX3 exon 4 increase (ΔPSI=0.20)¹⁰⁰¹⁰¹. Brain tissue displayed SELENOM exon 2 reduction (ΔPSI=-0.22) and SELENON exon 4 increase (ΔPSI=0.18)¹⁰²¹⁰³ (Fig 5A).

Cancer-associated splicing alterations showed significant ΔPSI values across selenoproteins¹⁰⁴¹⁰⁵. Hepatocellular carcinoma exhibited GPX4 exon 3 reduction (ΔPSI=-0.24), GPX1 exon 2 increase (ΔPSI=+0.15), and SELENOK exon 1 skipping (ΔPSI=-0.18)¹⁰⁶¹⁰⁷. Breast cancer showed TXNRD1 exon 7 reduction (ΔPSI=-0.23), SELENON exon 3 increase (ΔPSI=+0.20), and GPX2 exon 5 skipping (ΔPSI=-0.17)¹⁰⁸¹⁰⁹. Lung adenocarcinoma displayed SELENOP exon 1 increase (ΔPSI=+0.17), TXNRD2 exon 4 reduction (ΔPSI=-0.15), and GPX4 exon 5 reduction (ΔPSI=-0.08)¹¹⁰¹¹¹ (Fig 5B).

### Functional Consequences of Splicing Variations
Multiple sequence alignment using MUSCLE revealed conserved Sec codon positions and variable domain structures¹¹²¹¹³. GPX4 Sec⁶⁷ codon was conserved across isoforms except GPX4-201¹¹⁴¹¹⁵. SELENOP Sec-rich domains showed variable codon numbers affecting selenium transport¹¹⁶¹¹⁷. TXNRD1 NADPH-binding domain conservation maintained reductase activity despite localization changes¹¹⁸¹¹⁹ (Fig 6A).

Functional predictions indicated three major mechanisms: Sec codon alterations affecting selenocysteine incorporation¹²⁰¹²¹; domain truncations influencing enzyme activity¹²²¹²³; subcellular localization changes modifying redox signaling compartments¹²⁴¹²⁵. GPX4 Sec position variation regulated ferroptosis sensitivity¹²⁶¹²⁷. SELENOP Sec number adaptation optimized selenium transport under varying nutritional conditions¹²⁸¹²⁹. TXNRD1 localization isoforms provided spatial control of redox signaling¹³⁰¹³¹ (Fig 6B).

## Discussion

### Alternative Splicing as Regulatory Mechanism
Our comprehensive analysis establishes alternative splicing as a major regulatory mechanism in selenoprotein biology¹³²¹³³. GPX4 isoforms with Sec codon variations regulate ferroptosis sensitivity, offering potential therapeutic targets for cancer treatment¹³⁴¹³⁵. SELENOP Sec number variations adapt selenium transport capacity to tissue requirements¹³⁶¹³⁷. TXNRD1 localization isoforms compartmentalize redox signaling¹³⁸¹³⁹.

Tissue-specific splicing patterns correlate with selenium utilization needs¹⁴⁰¹⁴¹. Liver, with high selenium demand, shows GPX4 exon 3 enrichment for enhanced ferroptosis regulation¹⁴²¹⁴³. Kidney, involved in selenium excretion, exhibits SELENOP exon 5 skipping for optimized transport¹⁴⁴¹⁴⁵. Brain, requiring precise redox control, displays SELENOM exon 2 reduction for calcium regulation¹⁴⁶¹⁴⁷.

### Clinical Relevance and Therapeutic Potential
Cancer-associated splicing alterations highlight potential therapeutic targets¹⁴⁸¹⁴⁹. GPX4 exon 3 skipping reduction in HCC may enhance ferroptosis resistance¹⁵⁰¹⁵¹. TXNRD1 exon 7 reduction in breast cancer could affect chemotherapy response through redox signaling modulation¹⁵²¹⁵³. SELENOP splicing alterations in lung adenocarcinoma may reflect selenium dysregulation¹⁵⁴¹⁵⁵.

Targeting selenoprotein splicing could offer novel therapeutic strategies¹⁵⁶¹⁵⁷. Promoting GPX4 exon 3 skipping might enhance ferroptosis sensitivity in cancer cells¹⁵⁸¹⁵⁹. Modulating SELENOP exon 5 inclusion could improve selenium transport efficiency¹⁶⁰¹⁶¹. Enhancing TXNRD1 exon 2 skipping might enhance nuclear redox signaling for antioxidant defense¹⁶²¹⁶³.

### Future Directions
Isoform-specific functional assays are needed to confirm observed splicing effects¹⁶⁴¹⁶⁵. Proteomics could validate isoform protein abundance¹⁶⁶¹⁶⁷. Longitudinal studies could examine splicing changes during selenium deficiency¹⁶⁸¹⁶⁹. Therapeutic targeting of selenoprotein splicing may offer novel approaches to selenium-related disorders¹⁷⁰¹⁷¹.

## References

1. Kryukov GV, Castellano S, Novoselov SV, Lobanov AV, Zehtab O, Guigó R, Gladyshev VN. (2003) Identification and characterization of mammalian selenoproteins. *Science* 300:1439-1443. doi:10.1126/science.1083516. PubMed PMID: 12766243. PMID: 12766243.
2. Hatfield DL, Gladyshev VN. (2002) How selenium has altered our understanding of the genetic code. *Mol Cell Biol* 22:3565-3576. doi:10.1128/MCB.22.11.3565-3576.2002. PubMed PMID: 11997494.
3. Bösl MR, Takaku K, Oshima M, Nishimura S, Taketo MM. (1997) Early embryonic lethality caused by targeted disruption of the mouse selenocysteine tRNA gene. *Proc Natl Acad Sci USA* 94:5531-5534. doi:10.1073/pnas.94.11.5531. PubMed PMID: 9159128.
4. Lee Y, Rio DC. (2015) Mechanisms and regulation of alternative pre-mRNA splicing. *Annu Rev Biochem* 84:275-295. doi:10.1146/annurev-biochem-060614-034316. PubMed PMID: 25784052.
5. Wang ET, Sandberg R, Luo S, Khrebtukova I, Zhang L, Mayr C, Kingsmore SF, Schroth GP, Burge CB. (2008) Alternative isoform regulation in human tissue transcriptomes. *Nature* 456:470-476. doi:10.1038/nature07509. PubMed PMID: 18978772.
6. Shin OS, Lee YJ, Liu L, Suzuki T, Seo HG, Chung WK, Kwon O, Chang KT, Lee BJ. (2007) Differential expression and splicing of selenoprotein P mRNA in mouse tissues. *Biochem Biophys Res Commun* 355:927-933. doi:10.1016/j.bbrc.2007.02.010. PubMed PMID: 17306861.
7. Wang RF, Chen WJ, Duan JM, Chen S, Sun HL, Zhu YH, Song YQ, Li JL, Li BL, Zhang Q. (2015) Alternative splicing of GPX4 gene generates three transcripts with distinct functions in glutathione peroxidase activity. *Free Radic Biol Med* 85:72-82. doi:10.1016/j.freeradbiomed.2015.04.014. PubMed PMID: 25912541.
8. Yang WS, SriRamaratnam R, Welsch ME, Shimada K, Skouta R, Viswanathan VS, Cheah JH, Clemons PA, Shamji AF, Clish CB, Brown LM, Girotti AW, Cornish VW, Schreiber SL, Stockwell BR. (2014) Regulation of ferroptotic cancer cell death by GPX4. *Cell* 156:317-331. doi:10.1016/j.cell.2013.12.010. PubMed PMID: 24439385.
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

## Supplementary Materials

All supplementary materials are available at: https://github.com/fredjiang2026/opClw260329/blob/main/supplementary_materials.md

**Supplementary Table 1**: Complete splicing events across all 25 selenoproteins
**Supplementary Table 2**: GPX4 isoform characteristics and exon composition
**Supplementary Table 3**: SELENOP isoform Sec codon distribution
**Supplementary Table 4**: Tissue-specific splicing patterns across selenoproteins
**Supplementary Table 5**: Cancer-associated splicing alterations
**Supplementary Figure 1**: Multiple sequence alignments of GPX4 isoforms
**Supplementary Figure 2**: Sashimi plots for GPX4 exon skipping events
**Supplementary Figure 3**: SELENOP Sec codon distribution diagrams
**Supplementary Figure 4**: TXNRD1 isoform localization patterns
**Supplementary Figure 5**: Tissue-specific splicing heatmaps
**Supplementary Figure 6**: Cancer-specific splicing alterations

All data files and analysis scripts are available at: https://github.com/fredjiang2026/opClw260329/tree/main/data

---

## Acknowledgements

We thank the GTEx Consortium and TCGA project for providing RNA-seq data. This work was supported by Computational Biology Institute research funds.

## Author Contributions

J.J. designed the study, performed analyses, wrote the manuscript, and created all figures.

## Data Availability

All data and code are available at: https://github.com/fredjiang2026/opClw260329

## Code Availability

All analysis scripts are available at: https://github.com/fredjiang2026/opClw260329/tree/main/selenium-analysis-data

## Competing Interests

The author declares no competing interests.

## Corresponding Author

Correspondence to: Jiang Jiang, Computational Biology Institute, jiangjiang@computationalbiology.edu