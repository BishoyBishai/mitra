import { IProductState } from "../components/products/Product-Modal";

export interface IStore {
  router;
  products: IProductState;
}
