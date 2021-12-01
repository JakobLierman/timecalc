import React, { FC } from 'react';
import { View } from 'react-native';

import { TComponentProps } from '../../types';

type TProps = {
	// TODO
};

const Button: FC<TComponentProps<TProps>> = ({ style }) => {
	return <View style={style}>{/* TODO */}</View>;
};

export default React.memo(Button);
