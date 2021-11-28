import React, { FC, useEffect, useState } from 'react';

import { TTime } from '../../../domain/time.type';
import { TComponentProps } from '../../types';

import Styled from './TimeInput.styled';

type TProps = {
	defaultTime: TTime;
	onChangeTime: (timeValue: TTime) => void;
	minTime?: TTime;
	maxTime?: TTime;
};

const TimeInput: FC<TComponentProps<TProps>> = ({
	defaultTime,
	onChangeTime,
	minTime = { hours: 0, minutes: 0 },
	maxTime = { hours: 23, minutes: 59 },
	style,
}) => {
	const [time, setTime] = useState<TTime>(defaultTime);

	const onChangeHours = (hours: number): void => {
		if (hours > maxTime.hours) {
			setTime(maxTime);

			return;
		}

		if (hours < minTime.hours) {
			setTime(minTime);

			return;
		}

		if (hours === maxTime.hours) {
			setTime((prevTime) => ({
				hours,
				minutes: prevTime.minutes > maxTime.minutes ? maxTime.minutes : prevTime.minutes,
			}));

			return;
		}

		if (hours === minTime.hours) {
			setTime((prevTime) => ({
				hours,
				minutes: prevTime.minutes < minTime.minutes ? minTime.minutes : prevTime.minutes,
			}));

			return;
		}

		setTime((prevTime) => ({ ...prevTime, hours }));
	};

	const onChangeMinutes = (minutes: number): void => {
		if (time.hours === maxTime.hours && minutes > maxTime.minutes) {
			setTime((prevTime) => ({ ...prevTime, minutes: maxTime.minutes }));

			return;
		}

		if (time.hours === minTime.hours && minutes < minTime.minutes) {
			setTime((prevTime) => ({ ...prevTime, minutes: minTime.minutes }));
		}

		setTime((prevTime) => ({ ...prevTime, minutes }));
	};

	useEffect(() => {
		onChangeTime(time);
	}, [time]);

	return (
		<Styled.Container style={style}>
			<Styled.NumberInput
				isFirst={true}
				defaultValue={defaultTime.hours}
				onChangeValue={onChangeHours}
				minimum={minTime.hours}
				maximum={maxTime.hours}
			/>
			<Styled.NumberInput
				isLast={true}
				defaultValue={defaultTime.minutes}
				onChangeValue={onChangeMinutes}
				minimum={minTime.minutes}
				maximum={maxTime.minutes}
			/>
		</Styled.Container>
	);
};

export default TimeInput;
