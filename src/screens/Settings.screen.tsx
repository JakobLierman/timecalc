import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { Text } from 'react-native';

import { ERootRouteNames, TRootStackParamList } from '../navigations';

type TProps = NativeStackScreenProps<TRootStackParamList, ERootRouteNames.SETTINGS> & {
	// TODO
};

const SettingsScreen: FC<TProps> = ({ navigation }) => {
	// TODO

	return <Text>Settings Screen</Text>;
};

export default SettingsScreen;
