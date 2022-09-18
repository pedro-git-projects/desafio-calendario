import * as months from "./months";

export abstract class Calendar  {
	public static printCalendar(year: string): void {
		let j = new months.January(year);
		j.printMonth();
		let f = new months.February(year, j.getCurrentWeekDay());
		f.printMonth();
		let m = new months.March(f.getCurrentWeekDay());
		m.printMonth();
		let apr = new months.April(m.getCurrentWeekDay());
		apr.printMonth();
		let ma = new months.May(apr.getCurrentWeekDay());
		ma.printMonth();
		let jun = new months.June(ma.getCurrentWeekDay());
		jun.printMonth();
		let jul = new months.July(jun.getCurrentWeekDay());
		jul.printMonth();
		let aug = new months.August(jul.getCurrentWeekDay());
		aug.printMonth();
		let sep = new months.September(aug.getCurrentWeekDay());
		sep.printMonth();
		let oct = new months.October(sep.getCurrentWeekDay());
		oct.printMonth();
		let nov = new months.November(oct.getCurrentWeekDay());
		nov.printMonth();
		let dec = new months.December(nov.getCurrentWeekDay());
		dec.printMonth();
	}
}

