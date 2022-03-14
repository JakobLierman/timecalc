import { add, setSeconds } from 'date-fns';
import React, { FC, useEffect, useState } from 'react';

import { TComponentProps } from '../../components/types';
import { TTime } from '../../domain/time.type';
import AnalyticsService from '../../services/analytics.service';
import TimeCalculationService from '../../services/timeCalculation.service';

import Styled from './Calculation.styled';

const Calculation: FC<TComponentProps> = () => {
	// Duration
	const defaultDuration: TTime = { hours: 2, minutes: 0 };
	const [duration, setDuration] = useState<TTime>(defaultDuration);

	// End time
	const defaultEndTime: Date = add(setSeconds(new Date(), 0), {
		hours: defaultDuration.hours + 1,
		minutes: defaultDuration.minutes + 1,
	});
	const [endTime, setEndTime] = useState<Date>(defaultEndTime);

	// Accuracy
	const accuracies: number[] = [1, 5, 10, 15, 30, 60];
	const defaultAccuracy: typeof accuracies[number] = 30;
	const [accuracy, setAccuracy] = useState<typeof accuracies[number]>(defaultAccuracy);

	// Result delay time
	const result = TimeCalculationService.calculateDelayTime(duration, endTime);
	const roundedResult = TimeCalculationService.roundTime(result, accuracy);

	// Analytics event
	useEffect(() => {
		AnalyticsService.logCalculation(duration, endTime, accuracy, result, roundedResult);
	}, [result]);

	return (
		<Styled.Container>
			<Styled.DurationSection defaultDuration={defaultDuration} onChangeDuration={setDuration} />
			<Styled.EndDateSection
				defaultEndTime={defaultEndTime}
				onChangeEndTime={setEndTime}
				addedDays={result.addedDays}
			/>
			<Styled.AccuracySection
				accuracies={accuracies}
				defaultAccuracy={defaultAccuracy}
				onChangeAccuracy={setAccuracy}
			/>
			<Styled.ResultSection time={roundedResult} exactTime={accuracy === 1 ? undefined : result} />
		</Styled.Container>
	);
};

export default Calculation;
