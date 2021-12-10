import { addDays, format, getHours, getMinutes, setHours, setMinutes, setSeconds } from 'date-fns';
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
	addedDays?: number;
};

const EndTimeInput: FC<TComponentProps<TProps>> = ({
	defaultEndTime,
	onChangeEndTime,
	addedDays,
	style,
}) => {
	const [date, setDate] = useState<Date>();

	const onChangeTime = (time: TTime) => {
		const { hours, minutes } = time;
		let newDate = setSeconds(new Date(), 0);

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
		format(addDays(date, addedDays || 0), 'PPP', {
			/* locale: TODO */
		});

	return (
		<Section title={t('endTime.title')} subtext={dateSubtext} style={style}>
			<TimeInput defaultTime={DateUtils.extractTime(defaultEndTime)} onChangeTime={onChangeTime} />
		</Section>
	);
};

export default EndTimeInput;
