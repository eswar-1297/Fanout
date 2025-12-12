export type FanoutCategory =
  | 'core_facts'
  | 'background'
  | 'comparisons'
  | 'edge_cases'
  | 'implementation'
  | 'evaluation'
  | 'follow_up';

export type AIProvider = 'chatgpt' | 'gemini' | 'perplexity' | 'all';

export interface FanoutQuery {
  id: string;
  category: FanoutCategory;
  purpose: string;
  query: string;
}

export interface FanoutRequest {
  main_query: string;
  domain?: string;
  max_fanouts?: number;
  provider?: AIProvider;
}

export interface FanoutResponse {
  main_query: string;
  domain?: string;
  fanouts: FanoutQuery[];
  provider?: AIProvider;
  used_providers?: string[];
}


