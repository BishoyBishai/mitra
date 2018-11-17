import * as _ from "lodash";

export const isAuthenticated = auth => {
  return !_.get(auth, "isEmpty", true);
};
