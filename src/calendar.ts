import { ConcreteMonth } from "./concrete.month";
import { MonthName } from "./month.enum";
import { MonthType } from "./month.enum";

export abstract class Calendar  {
	public static printCalendar(year: string): void {
		const j = new ConcreteMonth(MonthName.January, MonthType.ThirtyOne, year);
		j.printFirstMonth();

		const f = new ConcreteMonth(MonthName.February, undefined , year, j.getCurrentWeekDay());
		f.printMonth();

		const m = new ConcreteMonth(MonthName.March, MonthType.ThirtyOne, year, f.getLastWeekDay());
		m.printMonth();

		const apr = new ConcreteMonth(MonthName.April, MonthType.Thirty, year, f.getLastWeekDay());
		apr.printMonth();

		const ma = new ConcreteMonth(MonthName.May, MonthType.ThirtyOne, year, apr.getLastWeekDay());
		ma.printMonth();

		const jun = new ConcreteMonth(MonthName.June, MonthType.Thirty, year, ma.getLastWeekDay());
		jun.printMonth();

		const jul = new ConcreteMonth(MonthName.July, MonthType.ThirtyOne, year, jun.getLastWeekDay());
		jul.printMonth();

		const aug = new ConcreteMonth(MonthName.August, MonthType.ThirtyOne, year, jul.getLastWeekDay());
		aug.printMonth();

		const sep = new ConcreteMonth(MonthName.September, MonthType.Thirty, year, aug.getLastWeekDay());
		sep.printMonth();

		const oct = new ConcreteMonth(MonthName.October, MonthType.ThirtyOne, year, sep.getLastWeekDay());
		oct.printMonth();

		const nov = new ConcreteMonth(MonthName.November, MonthType.Thirty, year, oct.getLastWeekDay());
		nov.printMonth();
		
		const dec = new ConcreteMonth(MonthName.December, MonthType.ThirtyOne, year, nov.getLastWeekDay());
		dec.printMonth();
	}
}

