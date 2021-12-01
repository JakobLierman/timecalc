import { DefaultTheme } from 'styled-components';

import { EFont } from '../assets/fonts';
import ColorUtils, { DarkLightHex } from '../utils/color.utils';

const primaryColor = '#D7263D';
const textColor: DarkLightHex = { dark: '#000000', light: '#FFFFFF' };

const defaultTheme: DefaultTheme = {
	fonts: {
		main: {
			regular: EFont.NotoSansRegular,
			italic: EFont.NotoSansItalic,
			bold: EFont.NotoSansBold,
			boldItalic: EFont.NotoSansBoldItalic,
		},
		alternative: {
			regular: EFont.DSDigitalRegular,
			italic: EFont.DSDigitalItalic,
			bold: EFont.DSDigitalBold,
			boldItalic: EFont.DSDigitalBoldItalic,
		},
		sizes: {
			default: 14,
			label: 16,
			title: 34,
			subtitle: 24,
		},
	},
	margins: {
		large: 24,
		default: 16,
		small: 8,
		tiny: 4,
	},
	colors: {
		primary: primaryColor,
		text: ColorUtils.getContrastColor(primaryColor, textColor),
		white: '#FFFFFF',
	},
	components: {
		keyboard: {
			appearance: 'light',
		},
		button: {
			fontSize: 20,
			disabledOpacity: 0.4,
		},
		selectionButton: {
			backgroundColor: {
				unselected: '#FFFFFF33',
				selected: '#FFFFFF',
			},
			borderRadius: 10,
			height: 36,
		},
		largeNumber: {
			fontSize: 64,
			borderRadius: 20,
			minHeight: 80,
		},
		numberInput: {
			backgroundColor: '#FFFFFF33',
		},
	},
};

export default defaultTheme;
