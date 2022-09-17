import * as months from "./months";

export abstract class Calendar  {
	public static printCalendar(year: string): void {
		let j = new months.January(year);
		j.printMonth();
		let f = new months.February(year);
		f.printMonth();
		let m = new months.March;
		m.printMonth();
		let ma = new months.May;
		ma.printMonth();
		let jun = new months.June;
		jun.printMonth();
		let jul = new months.July;
		jul.printMonth();
		let aug = new months.August;
		aug.printMonth();
		let sep = new months.September;
		sep.printMonth();
		let oct = new months.October;
		oct.printMonth();
		let nov = new months.November;
		nov.printMonth();
		let dec = new months.December;
		dec.printMonth();
	}
}

