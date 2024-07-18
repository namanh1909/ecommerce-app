import { Credential } from '@/core/entities';
import request from '../request'; // Ensure correct import

let instance: AuthApiService;

export class AuthApiService {
    private request: any;

    constructor() {
        this.request = request; // Use the imported request instance
    }

    static getInstance() {
        if (!instance) {
            instance = new AuthApiService();
        }
        return instance;
    }

    async signIn(credential: Credential) {
        try {
            const res = await this.request.post('auth/login', {
                email: credential._email, password: credential._password
            });
            return res;
        } catch (ex) {
            console.log('error')
        }
    }
    async signUp(credential: Credential) {
        try {
            const res = await this.request.post('auth/resgister', {
                email: credential._email, password: credential._password, name: credential._name, phone: credential._phone
            });
            return res;
        } catch (ex) {
            throw ex;
        }
    }
    // Add your methods here to use this.request for making API calls
}

export default AuthApiService.getInstance();