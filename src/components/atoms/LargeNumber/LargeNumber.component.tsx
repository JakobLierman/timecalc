import React, { FC } from 'react';

import DateUtils from '../../../utils/date.utils';
import { TComponentProps } from '../../types';

import Styled from './LargeNumber.styled';

type TProps = {
	value: number;
};

const LargeNumber: FC<TComponentProps<TProps>> = ({ value, style }) => {
	return (
		<Styled.Container style={style}>
			<Styled.NumberText>{DateUtils.displayTime(value, true)}</Styled.NumberText>
		</Styled.Container>
	);
};

export default LargeNumber;
