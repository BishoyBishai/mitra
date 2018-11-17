import { IAuthState } from './../components/auth/auth-modals';
import { IProductState } from "../components/products/Product-Modal";

export interface IStore {
  router;
  products: IProductState;
  firebase,
  firestore,
  auth:IAuthState,
}
