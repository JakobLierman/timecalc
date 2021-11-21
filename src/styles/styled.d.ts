import 'styled-components';
import { EFont } from '../assets/fonts';

type Font = {
	regular: EFont;
	italic?: EFont;
	bold?: EFont;
	boldItalic?: EFont;
};

declare module 'styled-components' {
	export interface DefaultTheme {
		fonts: {
			main: Font;
			alternative: Font;
			sizes: {
				default: number;
				title: number;
				subtitle: number;
				label: number;
			};
		};
		margins: {
			large: number;
			default: number;
			small: number;
			tiny: number;
		};
		colors: {
			primary: string;
			text: string;
		};
		components: {
			numberInput: {
				backgroundColor: string;
				borderRadius: number;
			};
		};
	}
}
