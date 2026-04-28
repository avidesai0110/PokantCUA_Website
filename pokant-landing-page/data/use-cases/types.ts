export interface UseCaseSource {
  url: string
  title: string
  domain: string
  status: "fetched" | "failed" | "timeout"
  relevance_score?: number
}

export interface UseCaseResult {
  [key: string]: unknown
}

export interface UseCaseSchema {
  type: string
  properties: Record<string, { type: string; description?: string }>
  required?: string[]
}

export interface UseCase {
  id: string
  task_id: string
  category: string
  use_case: string
  topic: string
  schema: UseCaseSchema
  status: "completed" | "failed" | "partial"
  duration_seconds: number
  cost_usd: number
  sources: UseCaseSource[]
  sources_failed: UseCaseSource[]
  schema_match: boolean
  result: UseCaseResult
}

export interface UseCaseSummary {
  total_tasks: number
  completed: number
  failed: number
  avg_duration_seconds: number
  avg_cost_usd: number
  avg_sources: number
  schema_match_rate: number
  success_rate: number
  categories: Record<string, number>
}
