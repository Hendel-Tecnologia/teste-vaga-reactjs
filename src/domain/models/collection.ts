export interface Collection<T> {
  totalRowCount: number
  pageSize: number
  totalPages: number
  currentPage: number
  nextPage: number | null
  prevPage: number | null
  data: T[]
}
