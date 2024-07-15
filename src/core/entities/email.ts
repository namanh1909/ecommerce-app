/* eslint-disable no-useless-escape */
// @flow
export class Email {
    address: string;

    constructor(address: string) {
        if (this.isValidAddress(address)) {
            throw new Error('ERRORS.EMAIL_INVALID');
        } else {
            this.address = address.toLowerCase();
        }
    }

    isValidAddress = (address: string) => {
        const validEmailRegex =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !validEmailRegex.test(address);
    };
}
