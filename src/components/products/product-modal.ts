export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  date_created: string;
  uid: string;
}

export interface IProductState {
  products: IProduct[];
  productsState: string;
  productError;
}

export interface IProductsProps {
  products: IProduct[];
}

export interface IProductFrom {
  create;
  dismiss;
  message: string;
  error: string;
}
