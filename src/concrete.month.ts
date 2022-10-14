import {CircularLinkedDays} from "./cyclic";
import {MonthName, MonthType} from "./month.enum";
import { Month } from "./month.interface";
import { table } from "table";
import {getWeeksFromYear} from "./weekday";
import { isLeapYear } from "./weekday";

export class ConcreteMonth implements Month {
	name : MonthName;
	monthType: MonthType; 
	numberOfDays: number;	
	numberOfWeeks : number;
	firstWeekDay ?: CircularLinkedDays;
	isLeapYear ?: boolean; 
	lastWeekDay ?: CircularLinkedDays;

	constructor(name: MonthName, type?: MonthType, year ?:string, last ?: CircularLinkedDays) {
		this.name = name;
		this.isLeapYear = isLeapYear(year); 
		if(this.name === MonthName.February && this.isLeapYear) {
			this.monthType = MonthType.TwentyNine;
		} else if (this.name === MonthName.February && !this.isLeapYear) {
			this.monthType = MonthType.TwentyEight;
		} else {
			this.monthType = type;
		}
		this.numberOfDays = parseInt(this.monthType);
		this.numberOfWeeks = Math.floor(this.numberOfDays / 7);
		this.firstWeekDay = new CircularLinkedDays(getWeeksFromYear(year));
		this.lastWeekDay = last;
	}

	printFirstMonth(): void {
		const config : any = {
			columnDefault: {
				width: 10,
			},
			header: {
				alignment: 'center',
				content: this.name,
			},
		}
		console.log(table(this.firstMonthTable(), config));
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


	firstMonthTable(): Array<[number]> {
		let weekCounter = 0;
		let i = 1;
		let row: Array<number|string> = [];
		let acc = [];

		while(i <= this.numberOfDays) {
			while(weekCounter < 7 && i < this.numberOfDays) {
				row.push(this.firstWeekDay.current.day + " \n " + i);
				this.firstWeekDay.current = this.firstWeekDay.current.next; 
				weekCounter++;
				i++;
			}
			acc.push(row);
			weekCounter = 0;
			row = [];

			if(i === this.numberOfDays) {
				let accLastIndex = acc.length - 1; 
				acc[accLastIndex].push(this.firstWeekDay.current.day + "\n" + i); // correcting by one mistake

				while(acc[accLastIndex].length < 7) { // adding empty cells
					acc[accLastIndex].push('');
				}
				break;
			}
		}
		return acc;
	}


	monthTable(): Array<[number]> {
		let weekCounter = 0;
		let i = 1;
		let row: Array<number|string> = [];
		let acc = [];

		while(i <= this.numberOfDays) {
			while(weekCounter < 7 && i < this.numberOfDays) {
				row.push(this.lastWeekDay.current.next.day + "\n" + i);
				this.lastWeekDay.current = this.lastWeekDay.current.next;
				weekCounter++;
				i++;
			}
			acc.push(row);
			weekCounter = 0;
			row = [];
			if(i === this.numberOfDays) {
				let accLastIndex = acc.length - 1; 
				if(acc[accLastIndex].length === 7) {
					let newRow = [];
					newRow.push(this.lastWeekDay.current.next.day + "\n" + i);
					acc.push(newRow);
					let newLastIndex = acc.length - 1;

					while(acc[newLastIndex].length < 7){
						acc[newLastIndex].push('');
					}
				} else {
					acc[accLastIndex].push(this.lastWeekDay.current.next.day + "\n" + i); 

					while(acc[accLastIndex].length < 7) { 
						acc[accLastIndex].push('');
					}
				}
				break;
			}
		}
		return acc;
	}

	getCurrentWeekDay(): CircularLinkedDays {
		return this.firstWeekDay;
	}

	getLastWeekDay() : CircularLinkedDays {
		this.lastWeekDay.current = this.lastWeekDay.current.next;
		return this.lastWeekDay;
	}
};
