import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableFreeze } from 'react-native-screens';
import { ThemeProvider } from 'styled-components';

import { useCachedResources, useColorScheme } from './hooks';
import RootNavigator from './navigations';
import darkTheme from './styles/dark.theme';
import defaultTheme from './styles/default.theme';

export const App: FC = () => {
	// React Freeze https://blog.swmansion.com/experimenting-with-react-freeze-71da578e2fa6
	enableFreeze();

	const isLoadingComplete = useCachedResources();
	const isDarkMode = useColorScheme() === 'dark';

	if (!isLoadingComplete) return null;

	return (
		<ThemeProvider theme={isDarkMode ? darkTheme : defaultTheme}>
			<SafeAreaProvider>
				<RootNavigator />
				<StatusBar style="auto" />
			</SafeAreaProvider>
		</ThemeProvider>
	);
};
