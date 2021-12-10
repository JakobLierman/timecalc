import {
	addDays,
	differenceInMinutes,
	hoursToMinutes,
	minutesToHours,
	subHours,
	subMinutes,
} from 'date-fns';

import { TTime } from '../domain/time.type';

type TDelayOptions = {
	addedDays?: number;
};

class TimeCalculationService {
	private static singletonInstance: TimeCalculationService;

	public static getInstance = (): TimeCalculationService => {
		if (!TimeCalculationService.singletonInstance) {
			TimeCalculationService.singletonInstance = new TimeCalculationService();
		}

		return TimeCalculationService.singletonInstance;
	};

	/**
	 * Calculates start time
	 * @param duration
	 * @param endTime
	 */
	private static calculateStartTime = (duration: TTime, endTime: Date): Date => {
		const { hours, minutes } = duration;

		return subHours(subMinutes(endTime, minutes), hours);
	};

	/**
	 * Rounds minutes down based on accuracy
	 * @param minutes
	 * @param accuracy
	 */
	private static roundMinutes = (minutes: number, accuracy: number): number => {
		return Math.floor(minutes / accuracy) * accuracy;
	};

	/**
	 * Rounds time down based on accuracy
	 * @param time
	 * @param accuracy
	 */
	public static roundTime = (time: TTime, accuracy: number): TTime => {
		const { hours, minutes } = time;

		const totalMinutes = hoursToMinutes(hours) + minutes;

		const roundedMinutes = TimeCalculationService.roundMinutes(totalMinutes, accuracy);
		const roundedHours = minutesToHours(roundedMinutes);

		return { hours: roundedHours, minutes: roundedMinutes - hoursToMinutes(roundedHours) };
	};

	/**
	 * Calculates how much time to delay, taking accuracy into account
	 * @param duration
	 * @param endTime
	 */
	public static calculateDelayTime = (duration: TTime, endTime: Date): TTime & TDelayOptions => {
		const now = new Date();
		// Calculate start time
		let startTime = TimeCalculationService.calculateStartTime(duration, endTime);
		let addedDays = 0;

		// Calculate exact difference (rounded by minute)
		let diffMinutes = differenceInMinutes(startTime, now);

		while (diffMinutes < 0) {
			addedDays++;
			startTime = addDays(startTime, addedDays);
			diffMinutes = differenceInMinutes(startTime, now);
		}

		const diffHours = minutesToHours(diffMinutes);

		// Return difference (delay)
		return { hours: diffHours, minutes: diffMinutes - hoursToMinutes(diffHours), addedDays };
	};
}

export default TimeCalculationService;
