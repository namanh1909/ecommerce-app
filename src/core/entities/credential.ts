// @flow

export default class Credential {
	_email: string;

	_password: string;

	_name?: string;

	_phone?: string;

	_userName?: string;

	constructor(email: string, password: string, name?: string, phone?: string, userName?: string) {
		this._password = password;
		this._email = email;
		this._name = name;
		this._phone = phone;
		this._userName = userName;

	}
}
