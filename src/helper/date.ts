import * as moment from "moment";

const toDate = d => moment(new Date(d.toDate()));

export const geCalenderDate = date => {
  return toDate(date).calendar();
};

export const compareToDates = (d1, d2) => {
  return toDate(d2).diff(toDate(d1));
};
