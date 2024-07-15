import Credential from "../entities/credential";
import { AuthenService } from "../useCase/authen";
import AuthApiService from "./apis/modules/authenticate";

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
                        const { data } = res;
                        console.log('data', data)
                        // this.addAuthorizationHeader(data);
                        // // Save token to use for firebase services
                        // helper.saveDataToAsyncStorage(
                        //   CONSTANTS.ASYNC_STORAGE_KEYS.REFRESH_TOKEN,
                        //   data.refresh_token,
                        // );
                        // helper.saveDataToAsyncStorage(
                        //   CONSTANTS.ASYNC_STORAGE_KEYS.TOKEN,
                        //   data.id_token,
                        // );
                        // resolve(data);
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
    signUpWithCredential(credential: Credential): Promise<any> {
        return new Promise((resolve, reject) => {
            this.AuthApiService
                .signIn(credential)
                .then((res: any) => {
                    if (res) {
                        console.log('data')
                        // const { data } = res;
                        // this.addAuthorizationHeader(data);
                        // // Save token to use for firebase services
                        // helper.saveDataToAsyncStorage(
                        //   CONSTANTS.ASYNC_STORAGE_KEYS.REFRESH_TOKEN,
                        //   data.refresh_token,
                        // );
                        // helper.saveDataToAsyncStorage(
                        //   CONSTANTS.ASYNC_STORAGE_KEYS.TOKEN,
                        //   data.id_token,
                        // );
                        // resolve(data);
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
}