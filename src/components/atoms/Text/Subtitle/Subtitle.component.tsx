import React, { FC } from 'react';
import { StyleProp, TextProps, TextStyle } from 'react-native';

import { TComponentProps } from '../../../types';

import Styled from './Subtitle.styled';

const Subtitle: FC<TComponentProps<TextProps, StyleProp<TextStyle>>> = ({ ...props }) => {
	return <Styled.Subtitle {...props} />;
};

export default React.memo(Subtitle);
