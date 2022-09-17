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

	printMonth(): void{
		const config : any = {
			columnDefault: {
				width: 10,
			},
			header: {
				alignment: 'center',
				content: this.name,
			},
		}
		console.log(table(this.monthTable(), config));
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

				while(acc[accLastIndex].length < 7) { // adding empty cells
					acc[accLastIndex].push('');
				}
				break;
			}
		}
		return acc;
	}
};
