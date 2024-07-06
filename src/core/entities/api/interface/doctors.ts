export interface IDoctor {
    _id: string;
    name: string;
    address: string;
    about: string;
    speciallyId: number;
    experience: number;
    avatarUrl: string;
    phoneNumber: string;
    email: string;
    IdUserDoctor: string;
}

export interface DoctorListResponse {
    data: IDoctor[];
}
export interface DoctorResponse {
    data: IDoctor;
}