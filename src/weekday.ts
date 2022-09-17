const weekDaySwitch = (day:number) => {
	switch(day) {
		case 0:
			return "Sun";
		case 1:
			return "Mon";
		case 2: 
			return "Tue";
		case 3:
			return "Wend";
		case 4:
			return "Thur";
		case 5:
			return "Fri";
		case 6:
			return "Sat";
		default:
			return "err";
	}
}

export const isLeapYear = (year: string) => {
	let yearNumber:number = parseInt(year); 
	return (yearNumber % 100 === 0) ? (yearNumber % 400 === 0) : (yearNumber % 4 === 0);
};

export const getWeeksFromYear = (year:string) => {
	let d = new Date("January 01, " + year + " 00:00:00");
	let gd = d.getDay();
	let ds = weekDaySwitch(gd);
	return ds;
};
