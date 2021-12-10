import { t } from 'i18n-js';
import React, { FC } from 'react';

import { TTime } from '../../../domain/time.type';
import DateUtils from '../../../utils/date.utils';
import { ResultTime } from '../../molecules';
import { Section } from '../../templates';
import { TComponentProps } from '../../types';

type TProps = {
	time: TTime;
	exactTime?: TTime;
};

const Result: FC<TComponentProps<TProps>> = ({ time, exactTime, style }) => {
	const exactTimeText: string | undefined =
		exactTime &&
		`${t('result.exactTime')} ${DateUtils.displayTime(
			exactTime.hours,
			true,
			true,
		)}:${DateUtils.displayTime(exactTime.minutes, true, true)}`;

	return (
		<Section title={t('result.title')} subtext={exactTimeText} style={style}>
			<ResultTime time={time} />
		</Section>
	);
};

export default React.memo(Result);
