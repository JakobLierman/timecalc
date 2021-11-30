import { DeviceType } from 'expo-device';
import { Dimensions, Platform, ScaledSize } from 'react-native';

class DeviceUtils {
	/**
	 * The dimensions of the device
	 * @private
	 */
	private static dimensions = Dimensions.get('window');

	/**
	 * Whether the device runs Android
	 */
	public static isAndroid = (): boolean => Platform.OS === 'android';

	/**
	 * Whether the device runs iOS
	 */
	public static isIOS = (): boolean => Platform.OS === 'ios';

	/**
	 * Whether the device is in landscape mode
	 * @param dimensionsOverride
	 */
	public static isLandscape = (dimensionsOverride?: ScaledSize): boolean => {
		if (dimensionsOverride) {
			return dimensionsOverride.width > dimensionsOverride.height;
		}

		const { width, height } = DeviceUtils.dimensions;

		return width > height;
	};

	/**
	 * Whether the device is in portrait mode
	 * @param dimensionsOverride
	 */
	public static isPortrait = (dimensionsOverride?: ScaledSize): boolean =>
		!DeviceUtils.isLandscape(dimensionsOverride);

	/**
	 * Whether the device type is a tablet
	 * @param deviceType
	 */
	public static isTablet = (deviceType: DeviceType) => deviceType === DeviceType.TABLET;
}

export default DeviceUtils;
