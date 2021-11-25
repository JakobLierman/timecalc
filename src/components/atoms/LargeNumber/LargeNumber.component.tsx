import React, { FC, useState } from 'react';
import { LayoutChangeEvent } from 'react-native';

import DateUtils from '../../../utils/date.utils';
import { TComponentProps } from '../../types';

import Styled from './LargeNumber.styled';

type TProps = {
	value: number;
};

const LargeNumber: FC<TComponentProps<TProps>> = ({ value, style }) => {
	const [fontSize, setFontSize] = useState<number>(90);

	const onLayout = (event: LayoutChangeEvent): void => {
		const { width, height } = event.nativeEvent.layout;

		const newFontSize = (width > height ? height : width) * 0.75;

		if (fontSize !== newFontSize) setFontSize(newFontSize);
	};

	return (
		<Styled.Container onLayout={onLayout} style={style}>
			<Styled.NumberText fontSize={fontSize}>
				{DateUtils.displayTime(value, true)}
			</Styled.NumberText>
		</Styled.Container>
	);
};

export default LargeNumber;
