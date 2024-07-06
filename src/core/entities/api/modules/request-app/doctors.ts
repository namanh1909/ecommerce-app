import { AxiosRequestConfig } from "axios";

export interface TypeGetListDoctorRequest extends AxiosRequestConfig {
    limit?: number,
    page?: number
}