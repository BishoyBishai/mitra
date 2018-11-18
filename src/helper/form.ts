export enum IConditionKey {
  REQUIRED = "REQUIRED",
  EMAIL = "EMAIL",
  NUMBER = "NUMBER",
  MIN_LENGTH = "MIN_LENGTH",
}
export interface ICondition {
  type: IConditionKey;
  message: string;
  value?;
}
export const checkField = (conditions: ICondition[], value) => {
  let error = [];
  conditions.map(condition => {
    switch (condition.type) {
      case IConditionKey.REQUIRED: {
        const pattern =/\S+/;;
        !pattern.test(value) && error.push(condition.message);
        break;
      }
      case IConditionKey.NUMBER: {
        const pattern = /^\d+$/;
        !pattern.test(value) && error.push(condition.message);
        break;
      }
      case IConditionKey.EMAIL: {
        const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        !pattern.test(value) && error.push(condition.message);
        break;
      }
      case IConditionKey.MIN_LENGTH: {
        value &&
          value.trim() &&
          value.length < condition.value &&
          error.push(condition.message);
        break;
      }
    }
  });
  return error;
};
