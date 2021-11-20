import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { Text } from 'react-native';

import { ERootRouteNames, TRootStackParamList } from '../navigations';

type TProps = NativeStackScreenProps<TRootStackParamList, ERootRouteNames.HOME> & {
	// TODO
};

const HomeScreen: FC<TProps> = ({ navigation }) => {
	// TODO

	return <Text>Home Screen</Text>;
};

export default HomeScreen;
