export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  date_created: string;
  uid: string;
}
export enum ISortedByEnum {
  PRICE = "Price",
  TITLE = "Title",
  DATE = "Date",
}

export interface IFilters {
  onlyMe: boolean;
  sortedBy: ISortedByEnum;
  sortedByDirection: number;
  filterByKeyWord: string;
}

export interface IProductState {
  products: IProduct[];
  productsState: string;
  productError;
  filters: IFilters;
  activePage: number;
}

export interface IProductsProps {
  products: IProduct[];
  dismiss;
  paginate;
  message: string;
  error: string;
  isPaginatedPage: boolean;
  totalPages: number;
  activePage: number;
}

export interface IProductFrom {
  create;
  dismiss;
  message: string;
  error: string;
}

export interface IProductsFilters {
  filterBy: string;
  onlyMe: boolean;
  sortedBy: ISortedByEnum;
  changeFilterBy;
  toggleOnlyMe;
  changeSortedBy;
}
