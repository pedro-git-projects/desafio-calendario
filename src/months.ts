import {MonthName, MonthType} from "./month.enum";
import {Month} from "./month.interface"

export class January  implements Month {
	name: MonthName;
	numberOfDays: MonthType;
	numberOfDaysNumber :number;
	numberOfWeeks: number;

	constructor() {
		this.name = MonthName.January;
		this.numberOfDays = MonthType.ThirtyOne;
		this.numberOfDaysNumber = parseInt(this.numberOfDays);
		this.numberOfWeeks = Math.floor(this.numberOfDaysNumber/ 7);
	}

	printMonth(): string{
		let weekCounter = 0;
		let row = "";
		let i = 1;
		while(i <= this.numberOfDaysNumber) {
			while(weekCounter < 7) {
				row += "[" + i + "]";
				row += " ";
				weekCounter++;
				i++;
			}
			row += '\n';
			weekCounter = 1;
		}
		return row;
	}
};
