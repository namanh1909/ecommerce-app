import { removeItemFromAsyncStorage, saveDataToAsyncStorage } from "@/utilities/helper";
import Credential from "../entities/credential";
import { AuthenService } from "../usecases/authen";
import AuthApiService from "../../apis/modules/authenticate";
import constants from "@/constants";

export class AuthenServices implements AuthenService {
    static INTERCEPTORS_TOKEN = -1;

    static instance = undefined;

    AuthApiService: any = undefined

    constructor() {
        this.AuthApiService = AuthApiService;
    }

    signingWithCredential(credential: Credential): Promise<any> {
        return new Promise((resolve, reject) => {
            this.AuthApiService
                .signIn(credential)
                .then((res: any) => {
                    if (res) {
                        const { user, tokens } = res;
                        saveDataToAsyncStorage(
                            constants.ASYNC_STORAGE_KEYS.REFRESH_TOKEN,
                            tokens?.refresh?.token,
                        );
                        saveDataToAsyncStorage(
                            constants.ASYNC_STORAGE_KEYS.TOKEN,
                            tokens?.access?.token,
                        );
                        resolve({ token: tokens?.access?.token, refreshToken: tokens?.refresh?.token, user });
                    }
                    else {
                        console.log('error')
                        resolve(undefined);

                    }
                })
                .catch(async (error: any) => {
                    console.log('error')
                    reject(error)
                });
        });
    }
    signUpWithCredential(credential: Credential): Promise<any> {
        return new Promise((resolve, reject) => {
            this.AuthApiService
                .signUp(credential)
                .then((res: any) => {
                    if (res) {
                        const { user, tokens } = res;
                        saveDataToAsyncStorage(
                            constants.ASYNC_STORAGE_KEYS.REFRESH_TOKEN,
                            tokens?.refresh?.token,
                        );
                        saveDataToAsyncStorage(
                            constants.ASYNC_STORAGE_KEYS.TOKEN,
                            tokens?.access?.token,
                        );
                        resolve({ token: tokens?.access?.token, refreshToken: tokens?.refresh?.token, user });
                    }
                    else {
                        console.log('error')
                        resolve(undefined);

                    }
                })
                .catch(async (error: any) => {
                    console.log('error')

                    // env.ENVIRONMENT === CONSTANTS.ENVIRONMENT.PRODUCTION &&
                    //     analytics().logEvent('exception_sign', {
                    //         error: error?.response?.data?.error,
                    //         id_token: error?.response?.data?.id_token,
                    //     });
                    // const exception = KikkerException.handleErrorApi(error);
                    // FileSystem.WriteFile('signing_With_Credential', error, exception);
                    // reject(exception);
                });
        });
    }
    registerDevice(deviceInfo: Object): Promise<any> {
        return new Promise((resolve, reject) => {
            this.
                AuthApiService(deviceInfo)
                .then((res: any) => {
                    if (res) {
                        const { data } = res;
                        resolve(data);
                    }
                })
                .catch((error: any) => {

                });
        });
    }

    logout(refreshToken: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.AuthApiService
                .logout(refreshToken)
                .then(() => {
                    removeItemFromAsyncStorage(constants.ASYNC_STORAGE_KEYS.REFRESH_TOKEN);
                    removeItemFromAsyncStorage(constants.ASYNC_STORAGE_KEYS.TOKEN);
                    resolve();
                })
                .catch((error: any) => {
                    reject(error);
                });
        });
    }
}