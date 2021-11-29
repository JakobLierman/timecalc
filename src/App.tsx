import { StatusBar, StatusBarStyle } from 'expo-status-bar';
import React, { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableFreeze } from 'react-native-screens';
import { ThemeProvider } from 'styled-components';

import { useCachedResources, useTheme } from './hooks';
import RootNavigator from './navigations';
import ColorUtils from './utils/color.utils';

export const App: FC = () => {
	// React Freeze https://blog.swmansion.com/experimenting-with-react-freeze-71da578e2fa6
	enableFreeze();

	const isLoadingComplete = useCachedResources();
	const theme = useTheme();

	if (!isLoadingComplete) return null;

	const statusBarStyle: StatusBarStyle =
		ColorUtils.getContrastColor(theme.colors.primary) === '#000000' ? 'dark' : 'light';

	return (
		<ThemeProvider theme={theme}>
			<SafeAreaProvider>
				<RootNavigator />
				<StatusBar style={statusBarStyle} translucent={true} />
			</SafeAreaProvider>
		</ThemeProvider>
	);
};
