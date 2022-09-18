import {weekDaySwitch} from "./weekday";

class Day {
	day: string; 
	next: Day;

	constructor(day:number) {
		this.day = weekDaySwitch(day);
		this.next = null;
	}

	toString() {
		return 
	}
}

export class CircularLinkedDays {
	current: Day;

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
		sun.day = "Sun";
		mon.next = tue;
		mon.day = "Mon";
		tue.next = wend;
		tue.day = "Tue";
		wend.next = thur;
		wend.day = "Wend";
		thur.next = fri;
		thur.day = "Thur";
		fri.next = sat;
		fri.day = "Fri";
		sat.next = sun;
		sat.day = "Sat";

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
		
		this.current = start;
	}
}
