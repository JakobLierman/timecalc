export type RGB = {
	r: number;
	g: number;
	b: number;
};

export type DarkLightHex = {
	dark: string;
	light: string;
};

/**
 * Credits to https://github.com/nathsimpson/hex-a11y
 */
class ColorUtils {
	/**
	 * Get contrast ratio between two relative luminances
	 * <https://www.w3.org/TR/WCAG20/#contrast-ratiodef>
	 *
	 * @param l1 number  The relative luminance of the first color (0.0 - 1.0).
	 * @param l2 number  The relative luminance of the second color (0.0 - 1.0).
	 * @returns  number  Contrast ratio - a number between 1.0 and 21.0.
	 */
	private static getContrastRatioHelper = (l1: number, l2: number): number => {
		return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
	};

	/**
	 * Convert a HEX color to RGB notation.
	 * @param {string} input - A color in hexadecimal syntax. e.g. #fa6d01
	 * @returns {{ r: number, g: number, b: number }} rgb
	 */
	private static hexToRGB = (input: string): RGB => {
		let hex = input;

		if (hex.length === 4) {
			hex = hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
		}

		return {
			r: parseInt(hex.substring(1, 3), 16),
			g: parseInt(hex.substring(3, 5), 16),
			b: parseInt(hex.substring(5, 7), 16),
		};
	};

	/**
	 * Compute the relative luminance of a color, using the algorithm from WCAG 2.0
	 * <https://www.w3.org/TR/WCAG20/#relativeluminancedef>.
	 * @param input
	 * @returns  number  The relative luminance of the color (0.0 - 1.0)
	 */
	private static getLuminance = (input: RGB): number => {
		const R = ColorUtils.toLinear(input.r);
		const G = ColorUtils.toLinear(input.g);
		const B = ColorUtils.toLinear(input.b);

		return 0.2126 * R + 0.7152 * G + 0.0722 * B;
	};

	/**
	 * @param channel number  Between 0 and 255.
	 * @returns number  Between 0.0 and 1.0
	 */
	private static toLinear = (channel: number): number => {
		const i = channel / 255;

		return i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
	};

	/**
	 * Derives an accessible text color for a background.
	 */
	public static getContrastColor = (
		input: string,
		config: DarkLightHex = {
			dark: '#000000',
			light: '#FFFFFF',
		},
	): string => {
		const { dark, light } = config;

		const luminance = ColorUtils.getLuminance(ColorUtils.hexToRGB(input));
		const luminanceDark = ColorUtils.getLuminance(ColorUtils.hexToRGB(dark));
		const luminanceLight = ColorUtils.getLuminance(ColorUtils.hexToRGB(light));

		const contrastDark = ColorUtils.getContrastRatioHelper(luminance, luminanceDark);
		const contrastLight = ColorUtils.getContrastRatioHelper(luminance, luminanceLight);

		if (contrastLight > contrastDark) {
			return light;
		} else {
			return dark;
		}
	};

	/**
	 * Returns the contrast ratio between two colors.
	 * @param {string} inputA - The first color in hex notation (e.g. "#fa6d01")
	 * @param {string} inputB - The second color in hex notation (e.g. "#fa6d01")
	 * @returns number - A number betweem 0.0 and 21.0.
	 */
	public static getContrastRatio = (inputA: string, inputB: string): number => {
		const luminanceA = ColorUtils.getLuminance(ColorUtils.hexToRGB(inputA));
		const luminanceB = ColorUtils.getLuminance(ColorUtils.hexToRGB(inputB));

		return ColorUtils.getContrastRatioHelper(luminanceA, luminanceB);
	};

	/**
	 * Returns the WCAG score determined from two colors.
	 * @param {string} inputA - The first color in hex notation (e.g. "#fa6d01")
	 * @param {string} inputB - The second color in hex notation (e.g. "#fa6d01")
	 * @returns string - The WCAG score
	 */
	public static getWcagScore = (inputA: string, inputB: string): 'AAA' | 'AA' | 'AA+' | 'FAIL' => {
		const contrastRatio = ColorUtils.getContrastRatio(inputA, inputB);

		if (contrastRatio >= 7) {
			return 'AAA';
		}

		if (contrastRatio >= 4.5) {
			return 'AA';
		}

		if (contrastRatio >= 3) {
			return 'AA+';
		}

		return 'FAIL';
	};
}

export default ColorUtils;
