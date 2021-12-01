import React, { FC } from 'react';

import DateUtils from '../../../utils/date.utils';
import { TComponentProps } from '../../types';

import Styled from './LargeNumber.styled';

type TProps = {
	value: number;
	allowNegative?: boolean;
};

const LargeNumber: FC<TComponentProps<TProps>> = ({ value, allowNegative = false, style }) => {
	return (
		<Styled.Container style={style}>
			<Styled.NumberText>{DateUtils.displayTime(value, true, allowNegative)}</Styled.NumberText>
		</Styled.Container>
	);
};

export default React.memo(LargeNumber);
