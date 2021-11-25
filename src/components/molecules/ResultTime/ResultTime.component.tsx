import React, { FC } from 'react';

import { TTime } from '../../../domain/time.type';
import { TComponentProps } from '../../types';

import Styled from './ResultTime.styled';

type TProps = {
	time: TTime;
};

const ResultTime: FC<TComponentProps<TProps>> = ({ time, style }) => {
	const { hours, minutes } = time;

	return (
		<Styled.Container style={style}>
			<Styled.LargeNumber isFirst={true} value={hours} />
			<Styled.LargeNumber isLast={true} value={minutes} />
		</Styled.Container>
	);
};

export default ResultTime;
