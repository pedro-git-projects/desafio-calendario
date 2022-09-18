import {Calendar} from "./calendar";
const prompt = require("prompt-sync")();

const year = prompt("-> Please enter the desired year: ")
Calendar.printCalendar(year);
