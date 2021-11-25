import { t } from 'i18n-js';
import React, { FC } from 'react';

import { TTime } from '../../../domain/time.type';
import { ResultTime } from '../../molecules';
import { Section } from '../../templates';
import { TComponentProps } from '../../types';

type TProps = {
	time: TTime;
};

const Result: FC<TComponentProps<TProps>> = ({ time, style }) => {
	return (
		<Section title={t('result.title')} style={style}>
			<ResultTime time={time} />
		</Section>
	);
};

export default Result;
