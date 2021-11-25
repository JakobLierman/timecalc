class DateUtils {
	/**
	 * Get time string similar to a clock display
	 * @param value
	 * @param leadingZero
	 */
	public static displayTime = (value: number, leadingZero: boolean): string => {
		let text = value.toString(10);

		if (leadingZero && text.length < 2) text = `0${text}`;

		return text;
	};
}

export default DateUtils;
