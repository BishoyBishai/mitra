import { IProduct, ISortedByEnum } from "../product-modal";
import { filterProduct } from "./filterProduct";
import { firestore } from "firebase-admin";
//import 'firebase/firestore'
describe("Filter and Sort product", () => {
  const p1: IProduct = {
    id: "1",
    title: "a",
    description: "a",
    price: 10,
    image: "",
    date_created: firestore.Timestamp.fromDate(new Date()),
    uid: "1",
  };
  const p2: IProduct = {
    id: "2",
    title: "b",
    description: "b",
    price: 5,
    image: "",
    date_created: firestore.Timestamp.fromDate(new Date()),
    uid: "2",
  };

  const initFilter = {
    onlyMe: false,
    sortedBy: null,
    sortedByDirection: 1,
    filterByKeyWord: null,
  };
  const uid = "1";
  const productList: IProduct[] = [p1, p2];

  it("pass the same list if passed with init filter", () => {
    expect(filterProduct(productList, initFilter, uid)).toMatchObject(
      productList,
    );
  });

  it("should remove all product which uid id not match with current uid", () => {
    expect(
      filterProduct(productList, { ...initFilter, onlyMe: true }, uid),
    ).toMatchObject([p1]);
  });

  it("should remove all product which doesn't match with search key and uid id not match with current uid", () => {
    expect(
      filterProduct(
        productList,
        { ...initFilter, filterByKeyWord: "b", onlyMe: true },
        uid,
      ),
    ).toMatchObject([]);
  });

  it("should sort all product by price", () => {
    expect(
      filterProduct(
        productList,
        { ...initFilter, sortedBy: ISortedByEnum.PRICE },
        uid,
      ),
    ).toMatchObject([p2, p1]);
  });

  it("should sort all product by price descending", () => {
    expect(
      filterProduct(
        productList,
        { ...initFilter, sortedBy: ISortedByEnum.PRICE, sortedByDirection: -1 },
        uid,
      ),
    ).toMatchObject([p1, p2]);
  });

  it("should sort all product by date ", () => {
    const sortedList = filterProduct(
      [p1, { ...p2, date_created: firestore.Timestamp.fromDate(new Date()) }],
      { ...initFilter, sortedBy: ISortedByEnum.DATE },
      uid,
    );
    expect(sortedList[0].id).toEqual("1");
  });

  it("should sort all product by date descending", () => {
    const sortedList = filterProduct(
      [p1, { ...p2, date_created: firestore.Timestamp.fromDate(new Date()) }],
      { ...initFilter, sortedBy: ISortedByEnum.DATE,sortedByDirection:-1 },
      uid,
    );
    expect(sortedList[0].id).toEqual("2");
  });

  it("should sort all product by title", () => {
    expect(
      filterProduct(
        productList,
        { ...initFilter, sortedBy: ISortedByEnum.TITLE },
        uid,
      ),
    ).toMatchObject([p1, p2]);
    
  });

  it("should sort all product by title descending", () => {
    expect(
      filterProduct(
        productList,
        { ...initFilter, sortedBy: ISortedByEnum.TITLE,sortedByDirection:-1 },
        uid,
      ),
    ).toMatchObject([p2, p1]);
    
  });


});
