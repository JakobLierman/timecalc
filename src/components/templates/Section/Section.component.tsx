import React, { FC } from 'react';
import { View } from 'react-native';

import { TComponentProps } from '../../types';

import Styled from './Section.styled';

type TProps = {
	title: string;
	subtext?: string;
};

const Section: FC<TComponentProps<TProps>> = ({ title, subtext, style, children }) => {
	return (
		<View style={style}>
			<Styled.Title>{title}</Styled.Title>
			{children}
			<Styled.Subtext>{subtext || ' '}</Styled.Subtext>
		</View>
	);
};

export default Section;
