import { DeviceType, getDeviceTypeAsync } from 'expo-device';
import { useEffect, useState } from 'react';

export default (): DeviceType => {
	const [deviceType, setDeviceType] = useState<DeviceType>();

	useEffect(() => {
		(async () => {
			const type = await getDeviceTypeAsync();
			setDeviceType(type);
		})();
	}, []);

	return deviceType || DeviceType.UNKNOWN;
};
