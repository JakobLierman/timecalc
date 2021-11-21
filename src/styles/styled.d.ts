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
		};
		components: {
			button: {
				fontSize: number;
			};
			numberInput: {
				backgroundColor: string;
				borderRadius: number;
			};
			selectionButton: {
				backgroundColor: {
					unselected: string;
					selected: string;
				};
				borderRadius: number;
			};
		};
	}
}
