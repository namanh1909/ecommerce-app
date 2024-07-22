import { apiLogger, logger } from '@/utilities/logger';
// import { ERRORS } from '@/utilities/staticData';
import axios, { AxiosRequestConfig } from 'axios';
import i18next from '@/translations';
// import Config from 'react-native-config';
import NetInfo from '@react-native-community/netinfo';
import { useTranslation } from 'react-i18next';
import Config from 'react-native-config';
// import { ERRORS } from 'utilities/staticData';
// import i18next from 'utilities/i18next';

// const AUTH_URL_REFRESH_TOKEN = `${process.API_URL}/auth/refreshToken`;
let hasAnyNetworkDialogShown = false;

const { t } = useTranslation(['common']);

class RequestService {
	private static instance: RequestService;

	private request: any;

	private isRefreshing: boolean = false;

	private failedQueue: any[] = [];

	private constructor() {
		this.request = axios.create({
			baseURL: Config.API_URL,
			timeout: 8000,
			headers: { Accept: '*/*' },
		});

		this.initializeRequestInterceptor();
		this.initializeResponseInterceptor();
	}

	public static getInstance(): RequestService {
		if (!RequestService.instance) {
			RequestService.instance = new RequestService();
		}
		return RequestService.instance;
	}

	private initializeRequestInterceptor() {
		this.request.interceptors.request.use(
			async (config: any) => {
				// Do something before API is sent
				// const token = TokenProvider.getToken();
				// if (token) {
				//     config.headers.Authorization = `Bearer ${token}`;
				// }
				return config;
			},
			(error: any) => {
				// Do something with API error
				apiLogger(
					`%c FAILED ${error.response.method?.toUpperCase()} from ${
						error.response.config.url
					}:`,
					'background: red; color: #fff',
					error.response,
				);
				return Promise.reject(error);
			},
		);
	}

	private initializeResponseInterceptor() {
		this.request.interceptors.response.use(
			(response: any) => response.data,
			async (error: any) => {
				// Check network first
				const network: any = await NetInfo.fetch();
				const validNetwork = network.isInternetReachable && network.isConnected;
				// validNetwork on first render in iOS will return NULL
				if (validNetwork === false && !hasAnyNetworkDialogShown) {
					hasAnyNetworkDialogShown = true;
					// renderAlert(i18next.t(ERRORS.network), () => {
					//     hasAnyNetworkDialogShown = false;
					// });
				}
				// Any status codes that falls outside the range of 2xx cause this function to trigger
				// Do something with response error
				const { response } = error || {};
				const { data } = response || {};
				const { errorMessage, errorKey } = data || {};
				apiLogger(
					`%c FAILED ${error.config?.method?.toUpperCase()} from ${
						error?.config?.url
					}:`,
					'background: red; color: #fff',
					error.response,
				);
				const originalRequest = error.config;
				if (errorMessage === 'RefreshToken_NotExist') {
					logger('RefreshToken_NotExist => logout');
					// Logout here
					// AlertMessage('Phiên đăng nhập đã hết hạn', 'Doctor Booking', handleDissmissModal());

					return this.rejectError(error, validNetwork);
				}
				if (
					((error.response && error.response.status === 401) ||
						errorMessage === 'Token_Expire') &&
					!originalRequest.retry
				) {
					if (this.isRefreshing) {
						try {
							const queuePromise: any = await new Promise(
								(resolve: any, reject: any) => {
									this.failedQueue.push({ resolve, reject });
								},
							);
							originalRequest.headers.Authorization = `Bearer ${queuePromise.token}`;
							return this.request(originalRequest);
						} catch (err) {
							// AlertMessage('Phiên đăng nhập đã hết hạn', 'Doctor Booking', handleDissmissModal());

							return this.rejectError(String(err), validNetwork);
						}
					}
					logger('refreshing token...');
					originalRequest.retry = true;
					this.isRefreshing = true;
					// const localRefreshToken = TokenProvider.getRefreshToken();
					try {
						// const refreshTokenResponse = await axios.post(AUTH_URL_REFRESH_TOKEN, {
						//     refreshToken: localRefreshToken,
						// });
						// const { token, refreshToken } = refreshTokenResponse.data;
						// TokenProvider.setAllNewToken(token, refreshToken);
						// originalRequest.headers.Authorization = `Bearer ${token}`;
						// this.processQueue(null, token);
						return this.request(originalRequest);
					} catch (err) {
						// AlertMessage('Phiên đăng nhập đã hết hạn', 'Doctor Booking', handleDissmissModal());

						this.processQueue(err, null);
						return await this.rejectError(String(err), validNetwork);
					} finally {
						this.isRefreshing = false;
					}
				}
				error.message = errorMessage;
				error.keyMessage = errorKey || '';
				return this.rejectError(error.message, validNetwork);
			},
		);
	}

	private processQueue(error: any, token: string | null | undefined = null) {
		this.failedQueue.forEach((prom: any) => {
			if (error) {
				prom.reject(error);
			} else {
				prom.resolve(token);
			}
		});

		this.failedQueue = [];
	}

	private rejectError(err: string, validNetwork: boolean) {
		// Avoid being null
		if (validNetwork !== false) {
			return Promise.reject(err);
		}
		return Promise.reject(t('error.network'));
	}

	public getRequestInstance() {
		return this.request;
	}
}

export default RequestService.getInstance().getRequestInstance();
