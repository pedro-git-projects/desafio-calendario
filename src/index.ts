import {Calendar} from "./calendar";
import {getWeeksFromYear, isLeapYear} from "./weekday";

Calendar.printCalendar();
let d = getWeeksFromYear("2022");
console.log(d.toString());
