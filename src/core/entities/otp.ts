export class OTP {
    code: string;

    constructor(code: string) {
        if (this.isInvalidOTP(code)) {
            throw new Error('Invalid OTP code');
        }
        this.code = code;
    }

    private isInvalidOTP(code: string): boolean {
        const validOTPRegex = /^.{6}$/;
        return !validOTPRegex.test(code);
    }
}
