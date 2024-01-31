import { Platform } from 'react-native';
import { PERMISSIONS, Permission } from 'react-native-permissions';

export const LOCATION_PERMISSION: Permission | undefined = Platform.select({
  ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
});

export const CAMERA_PERMISSION: Permission | undefined = Platform.select({
  ios: PERMISSIONS.IOS.CAMERA,
  android: PERMISSIONS.ANDROID.CAMERA,
});
