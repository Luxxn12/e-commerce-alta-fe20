export type Response<T = any> = {
  code: number;
  status: string;
  message: string;
  data: T;
};

export interface Request {
  path?: string;
  query?: string;
  filter?: string
  limit?: string | number
  page?: string | number
}

export interface Meta {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export interface IPagination<T = any> {
  currentPage: number;
  data: T;
  totalItems: number;
  totalPages: number;
  itemsPerPage: number;
}