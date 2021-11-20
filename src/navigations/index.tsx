import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { t } from 'i18n-js';
import React, { FC } from 'react';

import HomeScreen from '../screens/Home.screen';
import SettingsScreen from '../screens/Settings.screen';

export enum ERootRouteNames {
	HOME = 'Home',
	SETTINGS = 'Settings',
}

export type TRootStackParamList = {
	[ERootRouteNames.HOME]: undefined;
	[ERootRouteNames.SETTINGS]: undefined;
};

const Stack = createNativeStackNavigator<TRootStackParamList>();

const RootNavigator: FC = () => {
	const homeScreenOptions = {
		title: t('title'),
	};

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name={ERootRouteNames.HOME}
					component={HomeScreen}
					options={homeScreenOptions}
				/>
				<Stack.Screen name={ERootRouteNames.SETTINGS} component={SettingsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default RootNavigator;
