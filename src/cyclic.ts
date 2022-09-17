import {weekDaySwitch} from "./weekday";

class Day {
	day: string; 
	next: Day;

	constructor(day:number) {
		this.day = weekDaySwitch(day);
		this.next = null;
	}
}

export class CircularLinkedDays {
	head: Day;

	constructor(startingDay:string) {
		let sun = new Day(0);
		let mon = new Day(1);
		let tue = new Day(2);
		let wend = new Day(3);
		let thur = new Day(4);
		let fri = new Day(5);
		let sat = new Day(6);
		let start:Day;

		sun.next = mon;
		mon.next = tue;
		tue.next = wend;
		thur.next = fri;
		fri.next = sat;
		sat.next = sun;

		switch(startingDay) {
			case "Sun":
				start = sun;	
				break;
			case "Mon":
				start = mon;
				break;
			case "Tue":
				start = tue;
				break;
			case "Wend":
				start = wend;
				break;
			case "Thur":
				start = thur;
				break;
			case "Fri":
				start = fri;
				break;
			case "Sat":
				start = sat;
				break;
		}
		
		this.head = start;
	}
}
