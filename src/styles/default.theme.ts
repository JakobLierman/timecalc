import { DefaultTheme } from 'styled-components';
import { EFont } from '../assets/fonts';

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
			subtitle: 20,
			title: 34,
			label: 16,
		},
	},
	margins: {
		large: 24,
		default: 16,
		small: 8,
		tiny: 4,
	},
	colors: {
		primary: '#D7263D',
		text: '#FFFFFF',
	},
	components: {
		numberInput: {
			backgroundColor: '#FFFFFF33',
			borderRadius: 20,
		},
	},
};

export default defaultTheme;
