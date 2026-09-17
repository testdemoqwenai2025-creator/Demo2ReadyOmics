(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,84367,e=>{"use strict";var a=e.i(43476),r=e.i(7529),s=e.i(34512),t=e.i(16815);function i({children:e}){return(0,a.jsxs)("div",{className:"flex min-h-screen flex-col bg-background",children:[(0,a.jsx)(r.Header,{}),(0,a.jsx)("main",{className:"flex-1",children:e}),(0,a.jsx)(s.Footer,{}),(0,a.jsx)(t.ReturnToHomeFab,{})]})}e.s(["PageLayout",()=>i])},87486,e=>{"use strict";var a=e.i(43476),r=e.i(91918),s=e.i(25913),t=e.i(75157);let i=(0,s.cva)("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function n({className:e,variant:s,asChild:n=!1,...d}){let c=n?r.Slot:"span";return(0,a.jsx)(c,{"data-slot":"badge",className:(0,t.cn)(i({variant:s}),e),...d})}e.s(["Badge",()=>n])},15288,e=>{"use strict";var a=e.i(43476),r=e.i(75157);function s({className:e,...s}){return(0,a.jsx)("div",{"data-slot":"card",className:(0,r.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...s})}function t({className:e,...s}){return(0,a.jsx)("div",{"data-slot":"card-header",className:(0,r.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...s})}function i({className:e,...s}){return(0,a.jsx)("div",{"data-slot":"card-title",className:(0,r.cn)("leading-none font-semibold",e),...s})}function n({className:e,...s}){return(0,a.jsx)("div",{"data-slot":"card-content",className:(0,r.cn)("px-6",e),...s})}e.s(["Card",()=>s,"CardContent",()=>n,"CardHeader",()=>t,"CardTitle",()=>i])},95468,e=>{"use strict";let a=(0,e.i(75254).default)("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["CheckCircle2",()=>a],95468)},55716,e=>{"use strict";let a=(0,e.i(75254).default)("git-branch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);e.s(["GitBranch",()=>a],55716)},26912,e=>{"use strict";let a=(0,e.i(75254).default)("file-check",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);e.s(["FileCheck",()=>a],26912)},25495,e=>{"use strict";var a=e.i(43476),r=e.i(15288),s=e.i(87486),t=e.i(19455),i=e.i(55716),n=e.i(75254);let d=(0,n.default)("terminal",[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]);var c=e.i(26912),o=e.i(72520),l=e.i(95468);let m=(0,n.default)("circle-play",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);function x(){return(0,a.jsx)("section",{id:"mvp-code",className:"border-b border-border bg-card",children:(0,a.jsxs)("div",{className:"container mx-auto max-w-7xl px-4 py-16 md:py-24",children:[(0,a.jsxs)("div",{className:"mx-auto max-w-3xl text-center",children:[(0,a.jsx)(s.Badge,{variant:"secondary",className:"mb-4",children:"Running MVP code (private repo)"}),(0,a.jsx)("h2",{className:"text-3xl font-semibold tracking-tight text-foreground sm:text-4xl",children:"Not just a demo — there is actual code behind this"}),(0,a.jsx)("p",{className:"mt-5 text-pretty text-muted-foreground sm:text-lg",children:"The Tessera Bio MVP is implemented as a Python pipeline + Nextflow workflow + CLI. The code lives in the private repository (ReadyOmics1-Advance). The public repo (DemoReadyOmics) mirrors only the public-facing subset. Everything below is what an evaluator would see in a private technical review."})]}),(0,a.jsxs)("div",{className:"mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3",children:[(0,a.jsxs)(r.Card,{className:"border-border shadow-sm",children:[(0,a.jsx)(r.CardHeader,{children:(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(d,{className:"h-5 w-5 text-primary"}),(0,a.jsx)(r.CardTitle,{className:"text-base",children:"CLI"})]})}),(0,a.jsxs)(r.CardContent,{children:[(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:"A single entry point for the pipeline. Sub-commands mirror the Nextflow stages so either can be used."}),(0,a.jsx)("pre",{className:"mt-3 overflow-x-auto rounded-md bg-foreground text-background p-3 text-xs text-background",children:`$ tessera build \\
    --config configs/gtex-breast.yaml \\
    --output-dir output/

[1/7] Parsing cohort config...
[2/7] Harmonising against Ensembl v110...
[3/7] Batch correction (ComBat-seq)...
[4/7] Generating leakage-controlled splits...
[5/7] Identifier drift report...
[6/7] Generating dataset card...
[7/7] Signing provenance manifest...`}),(0,a.jsxs)("p",{className:"mt-3 text-xs text-muted-foreground",children:["10 sub-commands: ",(0,a.jsx)("code",{children:"parse-config"}),", ",(0,a.jsx)("code",{children:"ingest"}),",",(0,a.jsx)("code",{children:"harmonise"}),", ",(0,a.jsx)("code",{children:"correct-batch"}),", ",(0,a.jsx)("code",{children:"splits"}),",",(0,a.jsx)("code",{children:"drift-report"}),", ",(0,a.jsx)("code",{children:"generate-card"}),",",(0,a.jsx)("code",{children:"sign"}),", ",(0,a.jsx)("code",{children:"verify"}),", ",(0,a.jsx)("code",{children:"build"}),"."]})]})]}),(0,a.jsxs)(r.Card,{className:"border-border shadow-sm",children:[(0,a.jsx)(r.CardHeader,{children:(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(i.GitBranch,{className:"h-5 w-5 text-primary"}),(0,a.jsx)(r.CardTitle,{className:"text-base",children:"Nextflow workflow"})]})}),(0,a.jsxs)(r.CardContent,{children:[(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:"Single-machine orchestration in v0.1; portable to cloud in v0.2. All containers are hash-pinned for reproducibility."}),(0,a.jsx)("pre",{className:"mt-3 overflow-x-auto rounded-md bg-foreground text-background p-3 text-xs text-background",children:`nextflow run main.nf \\
  -profile docker \\
  --config configs/gtex-breast.yaml \\
  --output-dir output/

Stages:
  1. IngestSample   (per-sample)
  2. RunQC           (fastp)
  3. Align           (STAR 2.7.11b)
  4. Quantify        (salmon 1.10.1)
  5. Harmonise       (Ensembl v110 + DESeq2 vst)
  6. CorrectBatch    (ComBat-seq)
  7. GenerateSplits  (U1 leakage control)
  8. IdentifierDrift (U2 diff report)
  9. GenerateCard    (U1 + U2)
 10. SignManifest    (Sigstore)`})]})]}),(0,a.jsxs)(r.Card,{className:"border-border shadow-sm",children:[(0,a.jsx)(r.CardHeader,{children:(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(c.FileCheck,{className:"h-5 w-5 text-primary"}),(0,a.jsx)(r.CardTitle,{className:"text-base",children:"Dataset cards (YAML)"})]})}),(0,a.jsxs)(r.CardContent,{children:[(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:"Real, signed artefacts that ship with every ML-ready dataset. The schema is public; the implementation is source-available."}),(0,a.jsx)("pre",{className:"mt-3 overflow-x-auto rounded-md bg-foreground text-background p-3 text-xs text-background",children:`dataset_id: tessera.rnaseq.v0.1...
ensembl_release: 110
uniprot_release: 2024_01
splits:
  strategy: held_out_cohorts
  leakage_controls:
    donor_overlap_check: passed
identifier_drift_report:
  compared_to_ensembl_release: 109
  genes_added: 87
  genes_removed: 12
provenance:
  output_matrix_sha256: sha256:...`}),(0,a.jsx)("p",{className:"mt-3 text-xs text-muted-foreground",children:"3 example cards in the private repo: GTEx breast, TCGA-LUAD open tier, DepMap pan-cancer."})]})]})]}),(0,a.jsx)(r.Card,{className:"mt-8 overflow-hidden border-border bg-background shadow-sm",children:(0,a.jsxs)(r.CardContent,{className:"p-6 md:p-8",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-4 md:flex-row md:items-center md:justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-lg font-semibold text-foreground",children:"Pipeline repo structure (private)"}),(0,a.jsx)("p",{className:"mt-2 text-sm text-muted-foreground",children:"The Next.js demo portal you are looking at is one folder inside the private repo. The pipeline, CLI, dataset cards, and benchmark notebook live alongside."})]}),(0,a.jsx)(t.Button,{variant:"outline",asChild:!0,children:(0,a.jsxs)("a",{href:"#contact",children:["Request private technical review",(0,a.jsx)(o.ArrowRight,{className:"ml-2 h-4 w-4"})]})})]}),(0,a.jsx)("pre",{className:"mt-6 overflow-x-auto rounded-md bg-foreground text-background p-4 text-xs text-background",children:`ReadyOmics1-Advance/                   # private repo
├── README.md
├── worklog.md                          # shared task log
├── pipeline/                           # Python + Nextflow
│   ├── pyproject.toml
│   ├── src/tessera/
│   │   ├── ingest.py                    # GEO / ArrayExpress / DepMap
│   │   ├── harmonise.py                 # Ensembl/UniProt pinning (U2)
│   │   ├── generate_card.py             # dataset-card generator (U1)
│   │   ├── splits.py                    # leakage-controlled splits (U1)
│   │   ├── provenance.py                # Sigstore signing
│   │   └── cli.py                       # 10 sub-commands
│   ├── tests/test_splits.py             # 5 passing tests
│   ├── datasets/
│   │   ├── gtex-breast/dataset_card.yaml
│   │   ├── tcga-lung-open/dataset_card.yaml
│   │   └── depmap-pancancer/dataset_card.yaml
│   ├── nextflow/
│   │   ├── main.nf                      # 10-stage workflow
│   │   ├── nextflow.config              # docker / singularity / aws_batch
│   │   └── configs/gtex-breast.yaml
│   └── notebooks/
│       └── 01_ml_readiness_benchmark.ipynb
├── web-app/                            # the demo portal you are viewing
├── public/                            # mirror root -> DemoReadyOmics
├── artefacts/                         # strategy doc + licence matrix xlsx
└── .github/workflows/sync-to-public.yml`}),(0,a.jsxs)("div",{className:"mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4",children:[(0,a.jsx)(h,{label:"Pipeline modules",value:"5"}),(0,a.jsx)(h,{label:"CLI sub-commands",value:"10"}),(0,a.jsx)(h,{label:"Nextflow stages",value:"10"}),(0,a.jsx)(h,{label:"Demo dataset cards",value:"3"})]}),(0,a.jsxs)("div",{className:"mt-6 flex flex-wrap gap-2",children:[(0,a.jsxs)(s.Badge,{variant:"secondary",className:"gap-1",children:[(0,a.jsx)(l.CheckCircle2,{className:"h-3 w-3"}),"Python 3.10+"]}),(0,a.jsxs)(s.Badge,{variant:"secondary",className:"gap-1",children:[(0,a.jsx)(l.CheckCircle2,{className:"h-3 w-3"}),"Nextflow 23.10"]}),(0,a.jsxs)(s.Badge,{variant:"secondary",className:"gap-1",children:[(0,a.jsx)(l.CheckCircle2,{className:"h-3 w-3"}),"Docker hash-pinned"]}),(0,a.jsxs)(s.Badge,{variant:"secondary",className:"gap-1",children:[(0,a.jsx)(l.CheckCircle2,{className:"h-3 w-3"}),"Ensembl v110 / UniProt 2024_01"]}),(0,a.jsxs)(s.Badge,{variant:"secondary",className:"gap-1",children:[(0,a.jsx)(l.CheckCircle2,{className:"h-3 w-3"}),"5/5 unit tests passing"]}),(0,a.jsxs)(s.Badge,{variant:"secondary",className:"gap-1",children:[(0,a.jsx)(m,{className:"h-3 w-3"}),"End-to-end CLI verified"]})]})]})})]})})}function h({label:e,value:r}){return(0,a.jsxs)("div",{className:"rounded-md border border-border bg-card p-3 text-center",children:[(0,a.jsx)("p",{className:"text-2xl font-semibold text-foreground",children:r}),(0,a.jsx)("p",{className:"text-xs font-medium uppercase tracking-widest text-muted-foreground",children:e})]})}e.s(["LiveMVPCode",()=>x],25495)}]);