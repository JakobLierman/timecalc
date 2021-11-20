import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		fontSizes: {
			default: number;
			title: number;
			subtitle: number;
			label: number;
		};
		margins: {
			large: number;
			default: number;
			small: number;
			tiny: number;
		};
		colors: {}; // TODO
		components: {}; // TODO
	}
}
