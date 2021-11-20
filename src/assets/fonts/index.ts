import * as Font from 'expo-font';
import { FontAwesome } from '@expo/vector-icons';

enum EFont {
	NotoSansRegular = 'NotoSans-Regular',
	NotoSansBold = 'NotoSans-Bold',
	NotoSansItalic = 'NotoSans-Italic',
	NotoSansBoldItalic = 'NotoSans-BoldItalic',
	DSDigitalRegular = 'DSDigital-Regular',
	DSDigitalBold = 'DSDigital-Bold',
	DSDigitalItalic = 'DSDigital-Italic',
	DSDigitalBoldItalic = 'DSDigital-BoldItalic',
}

const init = (): Promise<void> => {
	return Font.loadAsync({
		...FontAwesome.font,
		[EFont.NotoSansRegular]: require(`./NotoSans-Regular.ttf`),
		[EFont.NotoSansBold]: require(`./NotoSans-Bold.ttf`),
		[EFont.NotoSansItalic]: require(`./NotoSans-Italic.ttf`),
		[EFont.NotoSansBoldItalic]: require(`./NotoSans-BoldItalic.ttf`),
		[EFont.DSDigitalRegular]: require(`./DSDigital-Regular.ttf`),
		[EFont.DSDigitalBold]: require(`./DSDigital-Bold.ttf`),
		[EFont.DSDigitalItalic]: require(`./DSDigital-Italic.ttf`),
		[EFont.DSDigitalBoldItalic]: require(`./DSDigital-BoldItalic.ttf`),
	});
};

export default { init };
