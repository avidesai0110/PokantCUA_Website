export const quickStats = [
  { value: "$0.27", label: "Avg cost per query" },
  { value: "74s", label: "Avg latency" },
  { value: "16", label: "Avg sources per query" },
  { value: "100%", label: "Schema match rate" },
  { value: "OSS", label: "Open source core" },
  { value: "Yes", label: "Self-hostable" },
]

export interface ComparisonFeature {
  feature: string
  pokant: string
  openai_o3: string
  perplexity_sonar: string
  firecrawl_llm: string
  tavily_llm: string
  diy: string
}

export const comparisonFeatures: ComparisonFeature[] = [
  {
    feature: "Structured JSON output",
    pokant: "Schema-validated",
    openai_o3: "Prompt-dependent",
    perplexity_sonar: "No",
    firecrawl_llm: "Manual parsing",
    tavily_llm: "Manual parsing",
    diy: "Manual parsing",
  },
  {
    feature: "Source transparency",
    pokant: "Full URLs + status",
    openai_o3: "Inline citations",
    perplexity_sonar: "Inline citations",
    firecrawl_llm: "Raw HTML only",
    tavily_llm: "Search results",
    diy: "Depends",
  },
  {
    feature: "Multi-source synthesis",
    pokant: "16 sources avg",
    openai_o3: "Unknown",
    perplexity_sonar: "5-8 sources",
    firecrawl_llm: "1 page at a time",
    tavily_llm: "5-10 results",
    diy: "Custom",
  },
  {
    feature: "Cost per query",
    pokant: "$0.27 avg",
    openai_o3: "$2-5 est.",
    perplexity_sonar: "$5/1K searches",
    firecrawl_llm: "$0.50+ combo",
    tavily_llm: "$0.40+ combo",
    diy: "Variable",
  },
  {
    feature: "Depth control",
    pokant: "Configurable",
    openai_o3: "None",
    perplexity_sonar: "None",
    firecrawl_llm: "Crawl depth",
    tavily_llm: "Search depth",
    diy: "Custom",
  },
  {
    feature: "Self-hostable",
    pokant: "Yes (OSS)",
    openai_o3: "No",
    perplexity_sonar: "No",
    firecrawl_llm: "Yes (OSS)",
    tavily_llm: "No",
    diy: "Yes",
  },
  {
    feature: "Latency",
    pokant: "74s avg",
    openai_o3: "30-120s",
    perplexity_sonar: "2-5s",
    firecrawl_llm: "10-60s",
    tavily_llm: "5-15s",
    diy: "Variable",
  },
]

export interface CostRow {
  provider: string
  cost: string
  note: string
  highlighted?: boolean
}

export const costAtScale: CostRow[] = [
  { provider: "Pokant Deep Research", cost: "$0.27/query", note: "Flat rate, schema-validated output", highlighted: true },
  { provider: "OpenAI o3 (deep research)", cost: "$2-5/query", note: "Estimated from token usage" },
  { provider: "Perplexity Sonar Pro", cost: "$5/1K searches", note: "No structured output" },
  { provider: "Firecrawl + LLM", cost: "$0.50+/query", note: "Crawl + LLM inference combined" },
  { provider: "Tavily + LLM", cost: "$0.40+/query", note: "Search + LLM inference combined" },
  { provider: "DIY (scrape + GPT-4)", cost: "$1-10/query", note: "Maintenance overhead not included" },
]

export interface StructuralAdvantage {
  icon: string
  title: string
  description: string
  competitors: string
}

export const structuralAdvantages: StructuralAdvantage[] = [
  {
    icon: "CheckSquare",
    title: "Schema-validated output",
    description: "Define your output schema upfront. Every response is validated against it before delivery. No post-processing needed.",
    competitors: "Most return unstructured text or require manual JSON parsing with prompt engineering.",
  },
  {
    icon: "Layers",
    title: "Multi-source synthesis",
    description: "Aggregates data from 16 sources on average per query, cross-referencing claims across multiple pages.",
    competitors: "Typically limited to 5-8 sources or single-page extraction.",
  },
  {
    icon: "Link",
    title: "Transparent sourcing",
    description: "Every fact is traced back to its source URL with fetch status. You know exactly where data came from and which sources failed.",
    competitors: "Inline citations without fetch status or reliability indicators.",
  },
  {
    icon: "Sliders",
    title: "Depth control",
    description: "Configure how deep the research goes. Quick lookups or exhaustive deep dives — same API, different depth parameter.",
    competitors: "Fixed depth with no user control over research thoroughness.",
  },
  {
    icon: "Code",
    title: "Open source core",
    description: "Core engine is open source. Audit the code, self-host it, extend it. No vendor lock-in.",
    competitors: "Closed source with proprietary infrastructure. Data leaves your control.",
  },
  {
    icon: "DollarSign",
    title: "Predictable pricing",
    description: "Flat per-query pricing. No token math, no surprise bills from long research sessions.",
    competitors: "Token-based pricing that varies wildly based on query complexity.",
  },
]

export const methodology = [
  "We ran 36 real research tasks across 6 categories (Company, Market, Technical, Financial, Legal, Academic).",
  "Each task used identical topics and schemas to ensure fair comparison.",
  "Cost is measured as total API spend per query including all LLM calls and search costs.",
  "Latency is wall-clock time from request to complete, validated response.",
  "Source count includes only successfully fetched and relevant sources, not total attempts.",
  "Schema match rate measures whether the output conforms to the requested JSON schema without manual correction.",
]
