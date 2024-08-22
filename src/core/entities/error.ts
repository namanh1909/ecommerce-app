/**
 * Exception For Time-out or Network Error.
 */
export class ErrorMessage {
	status: number = -1;

	message: string = '';

	responseMessage: string = '';
}
class NetworkError extends Error {
	status = -1;

	constructor(error: ErrorMessage) {
		super(error.message || 'ERRORS.NETWORK_CONNECTION');
		// Saving class name in the property of our custom error as a shortcut.
		this.name = this.constructor.name;
		// @ts-ignore

		this.responseMessage = error.responseMessage;
		// Capturing stack trace, excluding constructor call from it.
		// Error.captureStackTrace(this, this.constructor);

		// You can use any additional properties you want.
		// I'm going to use preferred HTTP status for this error types.
		// `500` is the default value if not specified.
		// this.status = 500;
		this.message = error.message || 'ERRORS.NETWORK_CONNECTION';
	}
}
class CredentialError extends Error {
	constructor(error: ErrorMessage) {
		super(error.message || 'ERRORS.CREDENTIAL');
		// Saving class name in the property of our custom error as a shortcut.
		this.name = this.constructor.name;
		// @ts-ignore
		this.responseMessage = error.responseMessage;
		// Capturing stack trace, excluding constructor call from it.
		// Error.captureStackTrace(this, this.constructor);

		// You can use any additional properties you want.
		// I'm going to use preferred HTTP status for this error types.
		// `500` is the default value if not specified.
		// this.status = 500;
		this.message = error.message || 'ERRORS.CREDENTIAL';
	}
}
class NotFoundError extends Error {
	status = 404;

	constructor(error: ErrorMessage) {
		super(error.message || 'ERRORS.404');
		// Saving class name in the property of our custom error as a shortcut.
		this.name = this.constructor.name;
		// @ts-ignore

		this.responseMessage = error.responseMessage;

		// Capturing stack trace, excluding constructor call from it.
		// Error.captureStackTrace(this, this.constructor);

		// You can use any additional properties you want.
		// I'm going to use preferred HTTP status for this error types.
		// `500` is the default value if not specified.
		// this.status = 500;
		this.message = error.message || 'ERRORS.404';
	}
}

class BadRequestError extends Error {
	status = 400;

	constructor(error: ErrorMessage) {
		super(error.message || 'ERRORS.400');
		// Saving class name in the property of our custom error as a shortcut.
		this.name = this.constructor.name;
		// @ts-ignore

		this.responseMessage = error.responseMessage;

		// Capturing stack trace, excluding constructor call from it.
		// Error.captureStackTrace(this, this.constructor);

		// You can use any additional properties you want.
		// I'm going to use preferred HTTP status for this error types.
		// `500` is the default value if not specified.
		// this.status = 500;
		this.message = error.message || 'ERRORS.400';
	}
}

class RequestEntityTooLarge extends Error {
	status = 413;

	constructor(error: ErrorMessage) {
		super(error.message || 'ERRORS.413');
		// Saving class name in the property of our custom error as a shortcut.
		this.name = this.constructor.name;
		// @ts-ignore

		this.responseMessage = error.responseMessage;

		// Capturing stack trace, excluding constructor call from it.
		// Error.captureStackTrace(this, this.constructor);

		// You can use any additional properties you want.
		// I'm going to use preferred HTTP status for this error types.
		// `500` is the default value if not specified.
		// this.status = 500;
		this.message = error.message || 'ERRORS.413';
	}
}

export {
	NetworkError,
	CredentialError,
	NotFoundError,
	BadRequestError,
	RequestEntityTooLarge,
};
