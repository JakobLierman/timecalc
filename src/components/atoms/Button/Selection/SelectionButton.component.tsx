import React, { FC } from 'react';

import { TComponentProps } from '../../../types';

import Styled from './SelectionButton.styled';

type TProps = {
	selected: boolean;
	onSelect: () => void;
	value: string;
};

const SelectionButton: FC<TComponentProps<TProps>> = ({ selected, onSelect, value, style }) => {
	return (
		<Styled.Pressable selected={selected} onPress={onSelect} style={style}>
			<Styled.ValueText selected={selected} adjustsFontSizeToFit={true}>
				{value}
			</Styled.ValueText>
		</Styled.Pressable>
	);
};

export default React.memo(SelectionButton);
