import { checkIsExistEmail, login, register } from 'api/modules/api-app/authenticate';
import { TypeLoginRequest, TypeSignUp } from 'api/modules/request-app/authenticate';
import request from 'api/request';
import { userInfoActions } from 'app-redux/slices/userInfoSlice';
import { store } from 'app-redux/store';
import { AlertMessage } from 'components/base';
import { t } from 'i18next';
import { useState } from 'react';
import { StatusApi } from 'utilities/enum';
import { logger } from 'utilities/helper';

const AUTH_URL_REFRESH_TOKEN = 'auth/refreshToken';

const AuthenticateService = {
    isLogin: () => {
        const { userInfo } = store.getState();
        return !!userInfo?.token;
    },
    refreshToken: (inputRefreshToken: string) =>
        request.post(AUTH_URL_REFRESH_TOKEN, {
            refresh_token: inputRefreshToken,
        }),
    logOut: () => {
        store.dispatch(userInfoActions.logOut());
        // deleteTagOneSignal();
    },

    useAuthenticate: () => {
        const [loading, setLoading] = useState(false);
        const requestLogin = async (options: TypeLoginRequest) => {
            try {
                setLoading(true);
                const response: any = await login(options);
                if (response.Status == StatusApi.Success) {
                    console.log('update token')
                    store.dispatch(userInfoActions.getUserInfoRequest(response?.token));
                    store.dispatch(userInfoActions.updateToken({ token: response.token, refreshToken: response?.refreshToken }));
                }
                else {
                    AlertMessage(response.message);
                }

            } catch (e) {
                AlertMessage(String(e));
                logger(e);
            } finally {
                setLoading(false);
            }
        };

        const requestRegister = async (options: TypeSignUp) => {
            try {
                setLoading(true);

                const res = await checkIsExistEmail(options?.email);
                if (res?.data?.isExisted) {
                    AlertMessage(`${t('error.emailExisted')}`);
                    return;
                }
                const response: any = await register(options);
                if (response.status == StatusApi.Success) {
                    const param = {
                        email: options.email,
                        password: options.password,
                    };
                    requestLogin(param);
                }
            } catch (error) {
                AlertMessage(`${t('error.emailExisted')}`);
            } finally {
                setLoading(false);
            }
        };

        return {
            loading,
            requestLogin,
            requestRegister,
        };
    }
};

export default AuthenticateService;

