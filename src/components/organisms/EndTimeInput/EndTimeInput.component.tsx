import { addDays, format, getHours, getMinutes, setHours, setMinutes } from 'date-fns';
import { t } from 'i18n-js';
import React, { FC, useEffect, useState } from 'react';

import { TTime } from '../../../domain/time.type';
import DateUtils from '../../../utils/date.utils';
import { TimeInput } from '../../molecules';
import { Section } from '../../templates';
import { TComponentProps } from '../../types';

type TProps = {
	defaultEndTime: Date;
	onChangeEndTime: (endTimeValue: Date) => void;
};

const EndTimeInput: FC<TComponentProps<TProps>> = ({ defaultEndTime, onChangeEndTime, style }) => {
	const [date, setDate] = useState<Date>();

	const onChangeTime = (time: TTime) => {
		const { hours, minutes } = time;
		let newDate = new Date();

		const hoursDiff = hours - getHours(newDate);

		if (hoursDiff < 0 || (hoursDiff === 0 && minutes - getMinutes(newDate))) {
			newDate = addDays(newDate, 1);
		}

		newDate = setHours(newDate, hours);
		newDate = setMinutes(newDate, minutes);

		setDate(newDate);
	};

	useEffect(() => {
		if (date != null) onChangeEndTime(date);
	}, [date]);

	const dateSubtext =
		date &&
		format(date, 'PPP', {
			/* locale: TODO */
		});

	return (
		<Section title={t('endTime.title')} subtext={dateSubtext} style={style}>
			<TimeInput defaultTime={DateUtils.extractTime(defaultEndTime)} onChangeTime={onChangeTime} />
		</Section>
	);
};

export default EndTimeInput;
