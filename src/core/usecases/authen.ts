import constants from "@/constants";
import { Credential, CredentialError } from "../entities";
import { AuthenServices } from "../services";
import helper from "@/utilities/helper";
import { ErrorMessage } from "../entities/error";


export interface AuthenService {
    signingWithCredential(credential: Credential): Promise<any>;
    signUpWithCredential(credential: Credential): Promise<any>;
    registerDevice(deviceInfo: Object): Promise<string>;
    logout(refreshToken: string): Promise<void>;
}

export class AuthenInteractor {
    authServices: AuthenService;

    constructor() {
        this.authServices = new AuthenServices();
    }
    async getDeviceInfo() {
        const deviceType = await helper.getDeviceType();
        const deviceId = await helper.getDeviceId();
        const appVersion = await helper.getAppVersion();
        const osVersion = await helper.getOsVersion();
        let deviceToken = await helper.getDataFromAsyncStorage(
            constants.ASYNC_STORAGE_KEYS.DEVICE_TOKEN,
        );
        // if (!deviceToken) {
        //     deviceToken = await FirebaseService.getFCMToken();
        //     await helper.saveDataToAsyncStorage(
        //         constants.ASYNC_STORAGE_KEYS.DEVICE_TOKEN,
        //         deviceToken,
        //     );
        // }
        return {
            deviceType,
            deviceId,
            appVersion,
            deviceToken,
            osVersion,
        };
    }

    async signIn(credential: Credential): Promise<any> {
        try {
            const res = await this.authServices.signingWithCredential(credential);
            return res;
        } catch (ex) {
            // if (ex instanceof CredentialError) {
            //     throw new Error(ex.message);
            // }
            // throw new ErrorMessage('ERRORS.ERROR_LOGIN');
        }
    }
    async signUp(credential: Credential): Promise<any> {
        try {
            const res = await this.authServices.signUpWithCredential(credential);
            return res;
        } catch (ex) {
            // if (ex instanceof CredentialError) {
            //     throw new Error(ex.message);
            // }
            // throw new Error('ERRORS.ERROR_LOGIN');
        }
    }

    async logOut(refreshToken: string): Promise<void> {
        try {
            await this.authServices.logout(refreshToken);
        } catch (ex) {
            throw ex;
        }
    }


    async registerDevice(): Promise<any> {
        try {
            const deviceInfo: Object = await this.getDeviceInfo();
            const res = await this.authServices.registerDevice(deviceInfo);
            return res;
        } catch (ex) {
            throw ex;
        }
    }

}