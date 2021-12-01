import React, { FC } from 'react';

import { TTime } from '../../../domain/time.type';
import { TComponentProps } from '../../types';

import Styled from './ResultTime.styled';

type TProps = {
	time: TTime;
	allowNegative?: boolean;
};

const ResultTime: FC<TComponentProps<TProps>> = ({ time, allowNegative = false, style }) => {
	const { hours, minutes } = time;

	return (
		<Styled.Container style={style}>
			<Styled.LargeNumber isFirst={true} value={hours} allowNegative={allowNegative} />
			<Styled.LargeNumber isLast={true} value={minutes} allowNegative={allowNegative} />
		</Styled.Container>
	);
};

export default ResultTime;
