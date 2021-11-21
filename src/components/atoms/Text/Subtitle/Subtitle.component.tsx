import React, { FC } from 'react';
import { TextProps, TextStyle } from 'react-native';

import { TComponentProps } from '../../../types';

import Styled from './Subtitle.styled';

const Subtitle: FC<TComponentProps<TextProps, TextStyle>> = ({ ...props }) => {
	return <Styled.Subtitle {...props} />;
};

export default Subtitle;
