class TimeoutUtils {
	/**
	 * Adds delay
	 * @param ms
	 */
	public static wait = (ms: number): Promise<void> => {
		return new Promise((resolve) => {
			setTimeout(resolve, ms);
		});
	};
}

export default TimeoutUtils;
