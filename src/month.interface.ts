import { MonthName, MonthType } from "./month.enum";

export interface Month {
	firstWeekDay ?: string;
	name : MonthName;
	numberOfDays: MonthType;
	isLeapYear ?: boolean;
};
