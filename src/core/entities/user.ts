import { isEmpty, pick, keys } from 'lodash';
import { Email } from './email';
// @flow
export class User {
	static getCollectionName() {
		return 'User';
	}

	contactEmail: string = '';

	contactPhone: string = '';

	customerId: number = 0;

	dateOfBirth: Date = new Date();

	firstName: string = '';

	gender: boolean = false;

	id: string = '';

	lastName: string = '';

	profileImage: string = '';

	getEmail(): Email {
		return new Email(this.contactEmail);
	}
	// email: Email;
	// firstName: string;
	// lastName: string;
	// constructor(firstName: string, lastName: string, email: string) {
	//   if (this.isEmptyOrNull(firstName) || this.isEmptyOrNull(lastName)) {
	//     throw new Error('You must fill first name and last name');
	//   }

	//   this._email = new Email(email);
	//   this._firstName = firstName.toLocaleLowerCase();
	//   this._lastName = lastName.toLocaleLowerCase();
	// }
	// isEmptyOrNull(value: any) {
	//   if (_.isString(value)) {
	//     return _.isEmpty(value) || value.trim().length <= 0;
	//   }
	//   return _.isEmpty(value);
	// }
}

(User as any).schema = {
	name: 'User',
	primaryKey: 'id',
	properties: {
		contactEmail: 'string',
		contactPhone: 'string',
		customerId: 'int',
		dateOfBirth: 'date',
		firstName: 'string',
		gender: 'bool',
		id: 'string',
		lastName: 'string',
		profileImage: 'string?',
	},
};
