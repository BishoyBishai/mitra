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

export interface IProductState {
  products: IProduct[];
  productsState: string;
  productError;
  filters: {
    onlyMe: boolean;
    sortedBy: ISortedByEnum;
    sortedByDirection: number;
    filterByKeyWord: string;
  };
}

export interface IProductsProps {
  products: IProduct[];
  dismiss;
  message: string;
  error: string;
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
