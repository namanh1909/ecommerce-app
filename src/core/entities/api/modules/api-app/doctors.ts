import request from 'api/request';
import { TypeGetListDoctorRequest } from '../request-app/doctors';
import { ResponseApi } from 'api/interface/responseApi';
import { DoctorListResponse, DoctorResponse } from 'api/interface/doctors';

export const fetchDoctorsApi = (item: TypeGetListDoctorRequest): Promise<ResponseApi<DoctorListResponse>> => request.get(`doctor/GetDoctorMobile`, item);
export const fetchDoctorsBySpecialty = (id: string): Promise<ResponseApi<DoctorResponse>> => request.get(`doctor/specialty/${id}`)
export const fetchDoctorsById = (id: string): Promise<ResponseApi<DoctorResponse>> => request.get(`doctor/${id}`)



