import { Email } from './email';



export class Credential {
	_email: Email;
	_password: string;
	_name: string;
	_phone: string;

	constructor(email: string, password: string, name: string, phone: string) {
		if (isInvalid(password)) {
			throw new Error('Your password must contains only letter and numbers');
		}

		this._password = password;
		this._email = new Email(email);
		this._name = name;
		this._phone = phone;

	}

	get email(): string {
		return this._email.address;
	}

	get password(): string {
		return this._password;
	}

	get name(): string {
		return this._name;
	}
	get phone(): string {
		return this._phone;
	}
}

function isInvalid(password: string) {
	const passwordRegex = /^[a-zA-Z0-9_.-]*$/;
	return !passwordRegex.test(password);
}