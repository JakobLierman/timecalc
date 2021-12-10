import { DeviceType, getDeviceTypeAsync } from 'expo-device';
import { useEffect, useState } from 'react';

export default (): DeviceType => {
	const [deviceType, setDeviceType] = useState<DeviceType>(DeviceType.UNKNOWN);

	useEffect(() => {
		getDeviceTypeAsync().then(setDeviceType).catch(console.error);
	}, []);

	return deviceType;
};
