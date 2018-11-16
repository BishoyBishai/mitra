export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  date_created: string;
}

export interface IProductState {
  products: IProduct[];
}

export interface IProductsProps {
  products: IProduct[];
}
