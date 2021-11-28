import { getHours, getMinutes } from 'date-fns';

import { TTime } from '../domain/time.type';

class DateUtils {
	/**
	 * Extracts time from a date
	 * @param date
	 */
	public static extractTime = (date: Date): TTime => {
		return { hours: getHours(date), minutes: getMinutes(date) };
	};

	/**
	 * Get time string similar to a clock display
	 * @param value
	 * @param leadingZero
	 */
	public static displayTime = (value: number, leadingZero?: boolean): string => {
		let text = value.toString(10);

		if (leadingZero && text.length < 2) text = `0${text}`;

		return text;
	};
}

export default DateUtils;
