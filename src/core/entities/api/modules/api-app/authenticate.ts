import { CheckAccountExitedResponse, LoginResponse, ProfileResponse, RegisterResponse } from 'api/interface/authenticate';
import { ResponseApi } from 'api/interface/responseApi';
import request from 'api/request';
import { TypeLoginRequest, TypeSignUp, TypeUpdateInformation } from '../request-app/authenticate';

export const getProfile = (token?: string) : Promise<ResponseApi<ProfileResponse>> =>
    request.get(`auth/getProfile`, token ? { headers: { Authorization: `Bearer ${token}` } } : {});
export const login = (params: TypeLoginRequest) : Promise<ResponseApi<LoginResponse>> => request.post(`auth/login`, params);
export const register = (params: TypeSignUp) : Promise<ResponseApi<RegisterResponse>> => request.post(`auth/register`, params);
export const forgotPassword = (email: string) => request.post(`auth/forgot-password`, { email });
export const checkIsExistEmail = (email: string): Promise<ResponseApi<CheckAccountExitedResponse>> => request.post(`auth/check-account-existed`, { email });
export const getVerifyCode = (email: string) => request.post(`auth/request-verified-code`, { email });
export const checkVerifyCode = (email: string, verifiedCode: string) =>
    request.post(`auth/check-verified-code`, { email, verifiedCode });
export const resetPassword = (email: string, newPassword: string, verifiedCode: number) =>
    request.post(`auth/reset-password`, { email, newPassword, verifiedCode });
export const updateInformation = (options: TypeUpdateInformation) =>
    request.post(`auth/updateInformationUser`, options);
export const getUpdateProfile = () : Promise<ResponseApi<ProfileResponse>> => request.post(`auth/getProfile`);
