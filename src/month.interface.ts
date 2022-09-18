import {CircularLinkedDays} from "./cyclic";
import { MonthName, MonthType } from "./month.enum";

export interface Month {
	firstWeekDay ?: CircularLinkedDays;
	name : MonthName;
	numberOfDays: MonthType;
	isLeapYear ?: boolean;
	lastMonthWeekDay ?: CircularLinkedDays;
};
