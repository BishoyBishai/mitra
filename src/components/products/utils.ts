import { IConditionKey } from "../../helper/form";

export const validations = {
  title: [
    {
      type: IConditionKey.REQUIRED,
      message: "Title is required",
    },
  ],
  price: [
    {
      type: IConditionKey.REQUIRED,
      message: "Price is required",
    },
    {
      type: IConditionKey.NUMBER,
      message: "Price must to be number",
    },
  ],
};
