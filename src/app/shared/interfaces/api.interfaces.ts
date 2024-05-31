export interface PaginatedAPIResponse<T> {
  results: T[];
  page: number;
  total_pages: number;
  total_results: number;
}

export interface Genre {
  id: number;
  name: string;
}
