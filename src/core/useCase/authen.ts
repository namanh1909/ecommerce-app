import { Credential, CredentialError } from "../entities";
import { AuthenServices } from "../services";


export interface AuthenService {
    signingWithCredential(credential: Credential): Promise<any>;
    signUpWithCredential(credential: Credential): Promise<any>;
}

export class AuthenInteractor {
    authServices: AuthenService;


    constructor() {
        this.authServices = new AuthenServices();
    }

    async signIn(credential: Credential): Promise<any> {
        try {
            const res = await this.authServices.signingWithCredential(credential);
            return res;
        } catch (ex) {
            if (ex instanceof CredentialError) {
                if (ex instanceof CredentialError) {
                    throw new Error(ex.message);
                }
                throw new Error('ERRORS.ERROR_LOGIN');
            }
        }
    }
    async signUp(credential: Credential): Promise<any> {
        try {
            const res = await this.authServices.signUpWithCredential(credential);
            return res;
        } catch (ex) {
            if (ex instanceof CredentialError) {
                if (ex instanceof CredentialError) {
                    throw new Error(ex.message);
                }
                throw new Error('ERRORS.ERROR_LOGIN');
            }
        }
    }

}


