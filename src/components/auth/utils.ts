import { IConditionKey } from "../../helper/form";

export const validations = {
  email: [
    {
      type: IConditionKey.REQUIRED,
      message: "Field Email is required",
    },
    {
      type: IConditionKey.EMAIL,
      message: "Field Email Address must have a valid form",
    },
  ],
  password: [
    {
      type: IConditionKey.REQUIRED,
      message: "Field Password is required",
    },
    {
      type: IConditionKey.MIN_LENGTH,
      message: "Field Password must be more than 6 characters",
      value: 6,
    },
  ],
  displayName: [
    {
      type: IConditionKey.REQUIRED,
      message: "Field DisplayName is required",
    },
    {
      type: IConditionKey.MIN_LENGTH,
      message: "Field Full Name must be more than 4 characters",
      value: 4,
    },
  ]
};
