import { t } from 'i18n-js';
import React, { FC } from 'react';

import { TTime } from '../../../domain/time.type';
import { TimeInput } from '../../molecules';
import { Section } from '../../templates';
import { TComponentProps } from '../../types';

type TProps = {
	defaultDuration: TTime;
	onChangeDuration: (timeValue: TTime) => void;
};

const DurationInput: FC<TComponentProps<TProps>> = ({
	defaultDuration,
	onChangeDuration,
	style,
}) => {
	const minDuration: TTime = { hours: 0, minutes: 0 };
	const maxDuration: TTime = { hours: 11, minutes: 59 };

	return (
		<Section title={t('duration.title')} style={style}>
			<TimeInput
				defaultTime={defaultDuration}
				onChangeTime={onChangeDuration}
				minTime={minDuration}
				maxTime={maxDuration}
			/>
		</Section>
	);
};

export default React.memo(DurationInput);
