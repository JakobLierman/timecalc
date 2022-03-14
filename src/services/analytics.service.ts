import * as Application from 'expo-application';
import * as Device from 'expo-device';
import * as Analytics from 'expo-firebase-analytics';

import { TTime } from '../domain/time.type';

import { TDelayOptions } from './timeCalculation.service';

enum EEvent {
	APP_FOREGROUND = 'AppForeground',
	APP_BACKGROUND = 'AppBackground',
	CALCULATION = 'Calculation',
}

class AnalyticsService {
	/**
	 * Log generic event
	 *
	 * @param event
	 * @param data
	 */
	private static logEvent = (event: EEvent, data?: Record<string, unknown>): Promise<void> => {
		return Analytics.logEvent(event, {
			...data,
			version: {
				applicationVersion: Application.nativeApplicationVersion,
				buildVersion: Application.nativeBuildVersion,
			},
			device: {
				manufacturer: Device.manufacturer,
				model: Device.modelName,
			},
			os: {
				name: Device.osName,
				version: Device.osVersion,
			},
			timestamp: new Date(),
		});
	};

	/**
	 * Log event for bringing app to foreground
	 */
	public static logAppForeground = (): Promise<void> => this.logEvent(EEvent.APP_FOREGROUND);

	/**
	 * Log event for bringing app to background
	 */
	public static logAppBackground = (): Promise<void> => this.logEvent(EEvent.APP_BACKGROUND);

	/**
	 * Log event at calculation
	 *
	 * @param duration
	 * @param endTime
	 * @param accuracy
	 * @param result
	 * @param roundedResult
	 */
	public static logCalculation = (
		duration: TTime,
		endTime: Date,
		accuracy: number,
		result: TTime & TDelayOptions,
		roundedResult: TTime,
	): Promise<void> =>
		this.logEvent(EEvent.CALCULATION, {
			duration,
			endTime,
			accuracy,
			result,
			roundedResult,
		});
}

export default AnalyticsService;
