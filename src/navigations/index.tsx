import { NavigationContainer } from '@react-navigation/native';
import {
	createNativeStackNavigator,
	NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { t } from 'i18n-js';
import React, { FC } from 'react';

import { useTheme } from '../hooks';
import HomeScreen from '../screens/Home/Home.screen';
import SettingsScreen from '../screens/Settings/Settings.screen';

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
	const theme = useTheme();

	const screenOptions: NativeStackNavigationOptions = {
		headerBackTitle: t('back'),
		headerTintColor: theme.colors.text,
		headerShadowVisible: true,
		headerStyle: { backgroundColor: theme.colors.primary },
		headerLargeStyle: { backgroundColor: theme.colors.primary },
		headerLargeTitle: true,
		headerLargeTitleShadowVisible: false,
	};

	const homeScreenOptions: NativeStackNavigationOptions = {
		title: t('title'),
	};

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={screenOptions}>
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
