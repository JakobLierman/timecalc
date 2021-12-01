import { Feather } from '@expo/vector-icons';
import React, { FC } from 'react';
import { GestureResponderEvent } from 'react-native';

import defaultTheme from '../../../../styles/default.theme';
import { TComponentProps } from '../../../types';

import Styled from './IconButton.styled';

type TProps = {
	name: keyof typeof Feather.glyphMap;
	size: number;
	color?: string;
	onPress: (event: GestureResponderEvent) => void;
	disabled?: boolean;
};

const IconButton: FC<TComponentProps<TProps>> = ({
	name,
	size,
	color = defaultTheme.colors.white,
	disabled = false,
	onPress,
	style,
}) => {
	return (
		<Styled.Touchable disabled={disabled} onPress={onPress} style={style}>
			<Feather name={name} size={size} color={color} />
		</Styled.Touchable>
	);
};

export default React.memo(IconButton);
