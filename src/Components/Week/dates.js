import moment from "moment";

//this week

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getThisWeek = (date) => {
  const firstWeekDay = moment(date).startOf("week").toDate();
  const lastWeekDay = moment(date).endOf("week").toDate();
  const startDayOfWeek = firstWeekDay.getDate();
  const monthOfStartDay = monthNames[firstWeekDay.getMonth()];

  const endDayOfWeek = lastWeekDay.getDate();
  const monthOfEndDay = monthNames[lastWeekDay.getMonth()];

  return `${monthOfStartDay} ${startDayOfWeek} - ${monthOfEndDay} ${endDayOfWeek}`;
};

//last week
const startOfLastWeek = moment().subtract(1, "weeks").startOf("week").toDate();
const endOfLastWeek = moment().subtract(1, "weeks").endOf("week").toDate();

const startDayOfLastWeek = startOfLastWeek.getDate();
const monthOfLastStart = monthNames[startOfLastWeek.getMonth()];

const endDayOfLastWeek = endOfLastWeek.getDate();
const monthOfLastEnd = monthNames[endOfLastWeek.getMonth()];

const lastWeek = `${monthOfLastStart} ${startDayOfLastWeek} - ${monthOfLastEnd} ${endDayOfLastWeek}`;

//const test = () => console.log(startOfLastWeek);
