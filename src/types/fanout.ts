export type FanoutCategory =
  | 'core_facts'
  | 'background'
  | 'comparisons'
  | 'edge_cases'
  | 'implementation'
  | 'evaluation'
  | 'follow_up';

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
}

export interface FanoutResponse {
  main_query: string;
  domain?: string;
  fanouts: FanoutQuery[];
}

