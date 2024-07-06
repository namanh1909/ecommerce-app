export interface ProfileResponse {
    _id: string;
    name: string;
    email: string;
    phone: string;
    Date: string;
    Gender: string;
    Avatar: string;
    createAt: string;
    Role: string;
}

export interface LoginResponse {
    token: string;
    refreshToken: string;
    user: {
        _id: string;
        name: string;
        email: string;
    };
    message: string;
    expiresIn: string;
    Status: number;
}
export interface RegisterResponse {
    data: any;
}

export interface CheckAccountExitedResponse {
    isExisted: boolean;
}
