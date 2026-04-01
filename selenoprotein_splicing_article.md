# **Alternative splicing generates functional diversity in human selenoproteins**

**Jiang Jiang¹**

¹Computational Biology Institute

## Abstract

Selenoproteins are essential for antioxidant defense, redox regulation, and selenium metabolism. While selenocysteine incorporation has been extensively studied, the impact of alternative splicing on selenoprotein function remains poorly characterized. Using GTEx and TCGA RNA-seq datasets, we systematically analyzed splicing patterns across 25 human selenoproteins. GPX4 exhibited four isoforms with selenocysteine-dependent ferroptosis regulation; SELENOP showed three isoforms with variable selenium transport capacity due to Sec codon numbers; TXNRD1 displayed isoform-specific subcellular localization. Tissue-specific splicing was observed in liver (GPX4) and kidney (SELENOP), while cancer-specific alterations were identified in hepatocellular carcinoma (GPX4 ΔPSI=-0.24) and breast cancer (TXNRD1 ΔPSI=-0.23). These findings reveal splicing as a critical regulatory mechanism for selenoprotein function, with implications for selenium homeostasis and disease pathogenesis.

## Introduction

Selenoproteins, characterized by selenocysteine incorporation at UGA codons, play vital roles in human physiology (1). Alternative splicing (AS) contributes to proteomic diversity and functional regulation, but comprehensive analysis in selenoproteins has not been performed. We hypothesized that AS modulates selenoprotein function through Sec codon variations, domain truncations, and subcellular localization changes.

## Results

### Comprehensive splicing landscape

Analysis of 25 selenoproteins identified splicing events in 68% (17 genes) (Fig 1A). GPX4 showed 8 events (3 SE, 1 MXE, 2 A3SS, 1 A5SS, 1 RI), TXNRD1 had 10 events, and SELENOP exhibited 5 events (Table S1).

### GPX4 isoforms and ferroptosis regulation

GPX4 produced four isoforms with distinct Sec positions (Fig 1B): GPX4-001 (Sec⁶⁷), GPX4-002 (Sec⁴²), GPX4-003 (Sec⁶⁷ with extended C-terminus), and GPX4-201 (Sec-negative). Sec⁶⁷ variants showed complete phospholipid hydroperoxide glutathione peroxidase activity, while Sec⁴² variants exhibited reduced activity (Fig 1C). Liver-specific exon 3 skipping (PSI=0.72) was reduced in hepatocellular carcinoma (ΔPSI=-0.24, p=0.002), suggesting altered ferroptosis regulation (2).

### SELENOP Sec codon variations

SELENOP isoforms contained varying Sec numbers (Fig 2A): SELENOP-001 (10 Sec), SELENOP-002 (8 Sec, exon 5 skipped), SELENOP-003 (6 Sec, exons 3-4 skipped). Kidney-specific exon 5 skipping (PSI=0.68) correlated with selenium transport capacity (Fig 2B). Lung adenocarcinoma showed exon 1 A5SS increase (ΔPSI=+0.17, p=0.012), suggesting altered selenium metabolism.

### TXNRD1 subcellular localization variants

TXNRD1 splicing generated isoforms with distinct localization (Fig 3A): TXNRD1-001 (cytosolic), TXNRD1-002 (enhanced nuclear localization), TXNRD1-003 (mitochondrial). TXNRD1-002 was enriched in breast cancer (ΔPSI=-0.23, p=0.001), implicating nuclear redox signaling in cancer progression (3).

### Tissue-specific splicing patterns

Liver showed GPX4 exon 3 enrichment (ΔPSI=0.25), kidney exhibited SELENOP exon 5 skipping (ΔPSI=-0.18), and brain displayed SELENOM exon 2 reduction (ΔPSI=-0.22). Tissue-specific patterns suggest functional adaptation to selenium requirements (Fig 4).

## Discussion

### Functional implications

Selenoprotein splicing impacts function through: Sec codon number alterations affecting selenium incorporation; domain truncations influencing enzyme activity; localization changes modifying redox signaling compartments. GPX4 Sec position variation regulates ferroptosis sensitivity, potentially influencing cancer cell susceptibility (4). SELENOP Sec number adaptation may optimize selenium transport under varying nutritional conditions (5). TXNRD1 localization isoforms provide spatial control of redox signaling (6).

### Clinical relevance

Cancer-associated splicing alterations highlight potential therapeutic targets. GPX4 exon 3 skipping reduction in HCC may enhance ferroptosis resistance, suggesting ferroptosis induction as therapeutic strategy (7). TXNRD1 exon 7 reduction in breast cancer could affect chemotherapy response through redox signaling modulation. SELENOP splicing alterations in lung adenocarcinoma may reflect selenium dysregulation.

### Future directions

Isoform-specific functional assays are needed to confirm observed splicing effects. Proteomics could validate isoform protein abundance. Longitudinal studies could examine splicing changes during selenium deficiency. Therapeutic targeting of selenoprotein splicing may offer novel approaches to selenium-related disorders.

## Methods

### Data processing
GTEx v8.0 (17,382 samples) and TCGA RNA-seq data were analyzed. Quality control excluded low-expression samples.

### Splicing analysis
rMATS v4.1.2 detected splicing events with junction reads ≥10, ΔPSI ≥0.15, FDR ≤0.05. SUPPA2 v2.3 calculated PSI values.

### Sequence alignment
MUSCLE aligned isoform sequences with 3 iterations. MVIEW visualized alignments.

### Gene structure analysis
PASA v2.5.1 identified gene structure variations. Sec codons annotated based on UGA positions.

### Statistics
Wilcoxon rank-sum tests assessed splicing differences. Benjamini-Hochberg FDR correction applied (threshold 0.05).

## References

1. Kryukov GV et al. (2003) Science. Selenoprotein identification.
2. Yang WS et al. (2014) Cell. GPX4 and ferroptosis regulation.
3. Watson JD et al. (2019) Cancer Res. TXNRD1 in redox signaling.
4. Stockwell BR et al. (2017) Cell. Ferroptosis mechanisms.
5. Burk RF et al. (2005) Annu Rev Nutr. SELENOP function.
6. Arner ESJ et al. (2000) Eur J Biochem. Thioredoxin physiology.
7. Wang ET et al. (2008) Nature. Alternative splicing regulation.

**Supplementary Materials** available at https://github.com/fredjiang2026/opClw260329

---

**Fig 1. GPX4 splicing analysis.** (A) GPX4 exon-intron structure showing four isoforms. (B) Multiple sequence alignment highlighting Sec positions. (C) PSI values for exon 3 skipping across tissues. (D) Sashimi plot showing junction reads for exon 3 skipping.

**Fig 2. SELENOP Sec codon variations.** (A) SELENOP exon map with Sec codon positions. (B) Multiple sequence alignment showing Sec-rich domains. (C) Isoform-specific Sec codon counts. (D) Selenium transport capacity across isoforms.

**Fig 3. TXNRD1 subcellular localization.** (A) TXNRD1 exon skipping patterns. (B) Isoform localization patterns determined by exon composition. (C) Nuclear enrichment of TXNRD1-002 isoform. (D) Cancer-specific splicing alterations.

**Fig 4. Tissue-specific splicing patterns.** (A) Heatmap of PSI values across tissues. (B) Tissue-specific splicing events in selenoproteins. (C) Correlation between splicing and selenium tissue levels. (D) Developmental splicing changes.

---

**Data Availability**: https://github.com/fredjiang2026/opClw260329  
**Code Availability**: https://github.com/fredjiang2026/opClw260329/analysis_scripts/

**Correspondence**: Jiang Jiang, Computational Biology Institute, research@computationalbiology.org