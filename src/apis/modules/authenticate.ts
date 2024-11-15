import { Credential } from '@/core/entities';
import request from '../request'; // Ensure correct import
import { Axios } from 'axios';

let instance: AuthApiService;

export class AuthApiService {
	private request: Axios;

	constructor() {
		this.request = request; // Use the imported request instance
	}

	static getInstance() {
		if (!instance) {
			instance = new AuthApiService();
		}
		return instance;
	}

	async submitOTP(email: string, code: string) {
		try {
			const res = await this.request.post('auth/confirm-otp-email', {
				email, code
			});
			console.log(res)
			return res;
		} catch (ex) {
			console.log('error');
		}
	}

	async requestOTP(email: string) {
		try {
			const res = await this.request.post('auth/send-otp-email', {
				email
			});
			console.log(res)
			return res;
		} catch (ex) {
			console.log('error');
		}
	}

	async signIn(credential: Credential) {
		try {
			const res = await this.request.post('auth/login', {
				email: credential._email,
				password: credential._password,
			});
			return res;
		} catch (ex) {
			console.log('error');
		}
	}

	async signUp(credential: Credential) {
		try {
			const res = await this.request.post('auth/register', {
				email: credential._email.address,
				password: credential._password,
				name: credential._name,
				phone: credential._phone,
			});
			return res;
		} catch (ex) {
			throw ex;
		}
	}

	async logout(refreshToken: string) {
		try {
			const res = await this.request.post('auth/logout', {
				refreshToken,
			});
			return res;
		} catch (ex) {
			throw ex;
		}
	}
	// Add your methods here to use this.request for making API calls
}

export default AuthApiService.getInstance();
