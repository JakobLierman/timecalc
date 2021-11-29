import { DefaultTheme } from 'styled-components';

import darkTheme from '../styles/dark.theme';
import defaultTheme from '../styles/default.theme';

import useColorScheme from './useColorScheme.hook';

export default (): DefaultTheme => {
	const darkMode = useColorScheme() === 'dark';

	return darkMode ? darkTheme : defaultTheme;
};
