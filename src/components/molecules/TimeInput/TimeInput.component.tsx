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
	const [hours, setHours] = useState<number>(defaultTime.hours);
	const [minutes, setMinutes] = useState<number>(defaultTime.minutes);

	useEffect(() => {
		onChangeTime({ hours, minutes });
	}, [hours, minutes]);

	return (
		<Styled.Container style={style}>
			<Styled.NumberInput
				isFirst={true}
				defaultValue={defaultTime.hours}
				onChangeValue={setHours}
				minimum={minTime.hours}
				maximum={maxTime.hours}
				stepButtons={true}
			/>
			<Styled.NumberInput
				isLast={true}
				defaultValue={defaultTime.minutes}
				onChangeValue={setMinutes}
				minimum={minTime.minutes}
				maximum={maxTime.minutes}
				stepButtons={true}
			/>
		</Styled.Container>
	);
};

export default TimeInput;
