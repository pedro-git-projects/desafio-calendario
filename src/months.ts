import {MonthName, MonthType} from "./month.enum";
import {Month} from "./month.interface"
import { table } from "table";

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
		let whileCounter = [];
		let row = "";
		let i = 1;
		let max: number;
		while(i <= this.numberOfDaysNumber) {
			while(weekCounter < 7) {
				row += "[" + i + "]";
				row += " ";
				weekCounter++;
				i++;
				whileCounter.push(i);
				max = Math.max(...whileCounter);
				if(i >= this.numberOfDaysNumber) {
					break;
				}
			}
			if(max > this.numberOfDaysNumber) {
			} 
			row += '\n';
			weekCounter = 0;
		}
		return row;
	}

	monthTable(): Array<[number]>{
		let weekCounter = 0;
		let i = 1;
		let row: Array<number|string> = [];
		let acc = [];
		while(i <= this.numberOfDaysNumber) {
			while(weekCounter < 7 && i < this.numberOfDaysNumber) {
				row.push(i);
				weekCounter++;
				i++;
			}
			acc.push(row);
			weekCounter = 0;
			row = [];
			if(i === this.numberOfDaysNumber) {
				let accLastIndex = acc.length - 1;
				acc[accLastIndex].push(i); // correcting by one mistake
				while(acc[accLastIndex].length < 7) {
					acc[accLastIndex].push('');
				}
				break;
			}
		}
		return acc;
	}
};
