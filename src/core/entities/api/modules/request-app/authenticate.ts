import { AxiosRequestConfig } from "axios";

export interface TypeLoginRequest extends AxiosRequestConfig {
    email: string;
    password: string;
}

export interface TypeSignUp extends AxiosRequestConfig {
    name: string;
    password: string;
    email: string;
    confirmPassword: string;
}

export interface TypeUpdateInformation extends AxiosRequestConfig {
    name: string | '' | undefined;
    birthday: string | '' | undefined;
    gender: string | '' | undefined;
    phone: string | '' | undefined;
    email: string | '' | undefined;
    avatar: string | '' | undefined;
}