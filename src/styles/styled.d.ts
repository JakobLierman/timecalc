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
				label: number;
				title: number;
				subtitle: number;
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
			white: string;
		};
		components: {
			button: {
				fontSize: number;
			};
			selectionButton: {
				backgroundColor: {
					unselected: string;
					selected: string;
				};
				borderRadius: number;
				height: number;
			};
			largeNumber: {
				fontSize: number;
				borderRadius: number;
				minHeight: number;
			};
			numberInput: {
				backgroundColor: string;
			};
		};
	}
}
