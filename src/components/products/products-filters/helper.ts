import { ISortedByEnum } from "../product-modal";

export const getSortedByOption = () => {
  let sortByOptions = [];
  for (let item in ISortedByEnum) {
    if (isNaN(Number(item))) {
      sortByOptions.push({ text: item, value: item, key: item });
    }
  }
  return sortByOptions;
};
