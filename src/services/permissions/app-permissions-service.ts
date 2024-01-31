import {
  Permission,
  PermissionStatus,
  check,
  request,
} from 'react-native-permissions';
/* eslint-disable */
export class AppPermissionsService {
    checkPermission = async (permissions: Permission | undefined): Promise<PermissionStatus> => {
        console.log("AppPermission checkPermission permissions: ", permissions)

        const correctPermissions = permissions as Permission

        if (!correctPermissions) {
            return Promise.reject("permissions type is undefined")
        }

        try {
            return await check(correctPermissions)
        } catch (error) {
            console.log("AppPermission checkPermission error: ", error)
            return Promise.reject(error)
        }
    }

    requestPermission = async (permissions: Permission | undefined): Promise<PermissionStatus> => {
        console.log("AppPermission requestPermission permissions: ", permissions)

        const correctPermissions = permissions as Permission
        
        if (!correctPermissions) {
            return Promise.reject("permissions type is undefined")
        }

        try {
            return await request(correctPermissions)
        } catch (error) {
            console.log("AppPermission requestPermission error: ", error)
            return Promise.reject(error)
        }
    }
}