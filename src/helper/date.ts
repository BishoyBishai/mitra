import * as moment from "moment";

export const geCalenderDate = date => {
  return moment(new Date(date.toDate())).calendar();
};
