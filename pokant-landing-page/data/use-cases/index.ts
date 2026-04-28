import type { UseCase } from "./types"
export type { UseCase, UseCaseSource, UseCaseResult, UseCaseSchema, UseCaseSummary } from "./types"
export { summary } from "./_summary"

// Static imports for all use case JSON files
import cr1 from "./company-research-01.json"
import cr2 from "./company-research-02.json"
import cr3 from "./company-research-03.json"
import cr4 from "./company-research-04.json"
import cr5 from "./company-research-05.json"
import cr6 from "./company-research-06.json"
import ma1 from "./market-analysis-01.json"
import ma2 from "./market-analysis-02.json"
import ma3 from "./market-analysis-03.json"
import ma4 from "./market-analysis-04.json"
import ma5 from "./market-analysis-05.json"
import ma6 from "./market-analysis-06.json"
import tr1 from "./technical-research-01.json"
import tr2 from "./technical-research-02.json"
import tr3 from "./technical-research-03.json"
import tr4 from "./technical-research-04.json"
import tr5 from "./technical-research-05.json"
import tr6 from "./technical-research-06.json"
import fr1 from "./financial-research-01.json"
import fr2 from "./financial-research-02.json"
import fr3 from "./financial-research-03.json"
import fr4 from "./financial-research-04.json"
import fr5 from "./financial-research-05.json"
import fr6 from "./financial-research-06.json"
import lc1 from "./legal-compliance-01.json"
import lc2 from "./legal-compliance-02.json"
import lc3 from "./legal-compliance-03.json"
import lc4 from "./legal-compliance-04.json"
import lc5 from "./legal-compliance-05.json"
import lc6 from "./legal-compliance-06.json"
import as1 from "./academic-scientific-01.json"
import as2 from "./academic-scientific-02.json"
import as3 from "./academic-scientific-03.json"
import as4 from "./academic-scientific-04.json"
import as5 from "./academic-scientific-05.json"
import as6 from "./academic-scientific-06.json"

const allUseCases: UseCase[] = [
  cr1, cr2, cr3, cr4, cr5, cr6,
  ma1, ma2, ma3, ma4, ma5, ma6,
  tr1, tr2, tr3, tr4, tr5, tr6,
  fr1, fr2, fr3, fr4, fr5, fr6,
  lc1, lc2, lc3, lc4, lc5, lc6,
  as1, as2, as3, as4, as5, as6,
] as unknown as UseCase[]

export function loadUseCases(): UseCase[] {
  return allUseCases
}

export function groupByCategory(cases: UseCase[]): Record<string, UseCase[]> {
  const groups: Record<string, UseCase[]> = {}
  for (const c of cases) {
    if (!groups[c.category]) groups[c.category] = []
    groups[c.category].push(c)
  }
  return groups
}

export function computeMetrics(cases: UseCase[]) {
  const completed = cases.filter((c) => c.status === "completed")
  const totalDuration = cases.reduce((sum, c) => sum + c.duration_seconds, 0)
  const totalCost = cases.reduce((sum, c) => sum + c.cost_usd, 0)
  const totalSources = cases.reduce((sum, c) => sum + c.sources.length, 0)
  const schemaMatches = cases.filter((c) => c.schema_match).length

  return {
    total: cases.length,
    completed: completed.length,
    avgDuration: Math.round(totalDuration / cases.length),
    avgCost: +(totalCost / cases.length).toFixed(2),
    avgSources: Math.round(totalSources / cases.length),
    schemaMatchRate: +(schemaMatches / cases.length).toFixed(3),
    successRate: +(completed.length / cases.length).toFixed(3),
  }
}
