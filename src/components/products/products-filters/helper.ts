import { ISortedByEnum } from "../product-modal";

export const getSortedByOption = () => {
  let sortByOptions = [];
  for (let i in ISortedByEnum) {
    if (isNaN(Number(i))) {
      const item = ISortedByEnum[i];
      sortByOptions.push({ text: item, value: item, key: item });
    }
  }
  return sortByOptions;
};
