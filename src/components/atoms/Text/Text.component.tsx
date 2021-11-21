import React, { FC } from 'react';
import { TextProps, TextStyle } from 'react-native';

import { TComponentProps } from '../../types';

import Styled from './Text.styled';

const Text: FC<TComponentProps<TextProps, TextStyle>> = ({ ...props }) => {
	return <Styled.Text {...props} />;
};

export default Text;
