import React, { FC } from 'react';

import { TComponentProps } from '../../types';

import Styled from './SelectionRow.styled';

type TProps = {
	values: string[];
	selectedIndex: number;
	onChangeSelection: (index: number) => void;
};

const SelectionRow: FC<TComponentProps<TProps>> = ({
	values,
	selectedIndex,
	onChangeSelection,
	style,
}) => {
	return (
		<Styled.Container style={style}>
			{values.map((value, index) => (
				<Styled.SelectionButton
					key={index}
					selected={selectedIndex === index}
					onSelect={() => onChangeSelection(index)}
					value={value}
					isFirst={index === 0}
					isLast={index === values.length - 1}
				/>
			))}
		</Styled.Container>
	);
};

export default SelectionRow;
