import { IProduct, IFilters, ISortedByEnum } from "../product-modal";
import { compareToDates } from "../../../helper/date";

export const filterProduct = (
  products: IProduct[],
  filters: IFilters,
  uid: string,
) => {
  const { filterByKeyWord, onlyMe, sortedBy, sortedByDirection } = filters;
  const myProduct = !onlyMe
    ? products
    : products.filter(product => product.uid === uid);

  const filetedProduct =
    !filterByKeyWord || filterByKeyWord.trim() === ""
      ? myProduct
      : myProduct.filter(product =>
          product.title.toUpperCase().includes(filterByKeyWord.toUpperCase()),
        );
  let sortedProduct = !sortedBy
    ? filetedProduct
    : filetedProduct.sort((p1, p2) => {
        let sort: number;
        if (sortedBy === ISortedByEnum.DATE) {
          sort = compareToDates(p1.date_created, p2.date_created);
        } else if (sortedBy === ISortedByEnum.PRICE) {
          sort = p1.price - p2.price;
        } else sort = p1.title > p2.title ? 1 : -1;
        return sort * sortedByDirection;
      });

  return sortedProduct;
};

