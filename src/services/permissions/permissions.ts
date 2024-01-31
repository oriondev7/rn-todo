import { RESULTS } from 'react-native-permissions';
import {
  LOCATION_PERMISSION,
  CAMERA_PERMISSION,
} from './permissions.constants';
import { AppPermissionsService } from './app-permissions-service';

const service = new AppPermissionsService();

const isGranted = (value: string): boolean => value === RESULTS.GRANTED;
const isDenied = (value: string): boolean => value === RESULTS.DENIED;
const isBlocked = (value: string): boolean => value === RESULTS.BLOCKED;
const isUnavailable = (value: string): boolean => value === RESULTS.UNAVAILABLE;

const requestLocationPermission = () =>
  service.requestPermission(LOCATION_PERMISSION);
const requestCameraPermission = () =>
  service.requestPermission(CAMERA_PERMISSION);

const checkLocationPermission = () =>
  service.checkPermission(LOCATION_PERMISSION);
const checkCameraPermission = () => service.checkPermission(CAMERA_PERMISSION);

export default {
  isGranted,
  isDenied,
  isBlocked,
  isUnavailable,

  requestLocationPermission,
  requestCameraPermission,

  checkLocationPermission,
  checkCameraPermission,
};
