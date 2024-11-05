import { call, put, select, takeLatest } from 'redux-saga/effects';
import { Credential, OTP } from '@/core/entities';
import { AuthenInteractor } from '@/core/usecases/authen';
import { container } from '@/core/framworks/configs';
import { PayloadAction } from '@reduxjs/toolkit';
import helper from '@/utilities/helper';
import constants from '@/constants';
import { authActions, AuthSelectors } from '../slices/authSlice';
import { NetworkError } from '@/core/entities/error';
import { Email } from '@/core/entities/email';
import { navigate } from '@/navigators/navigation/NavigationService';
import { AUTHENTICATE_ROUTE } from '@/navigators/navigation/config/routes';

const AuthImp: AuthenInteractor = container.get(AuthenInteractor);

export function* checkValidateEmail({
}: PayloadAction<{ email: string }>): Generator {
	try {
		const email = yield select(AuthSelectors.getEmail);
		// Validate email using Email class
		const emailInstance = new Email(email as string);
		if (emailInstance.address) {
			yield put(authActions.validateEmailSuccess({ email: emailInstance.address }));
			navigate(AUTHENTICATE_ROUTE.SEND_OTP);
		} else {
			yield put(authActions.validateEmailFailure({ error: 'Invalid email address' }));
		}
	} catch (ex: any) {
		yield put(authActions.validateEmailFailure({ error: ex.message }));
	}
}

export function* checkValidateOTP({
}: PayloadAction<{ otp: string }>): Generator {
	try {
		const otp = yield select(AuthSelectors.getOTP);
		const OTPInstance = new OTP(otp as string);
		if (OTPInstance.code) {
			yield put(authActions.submitOTPSuccess({ otp: OTPInstance.code }));
		} else {
			yield put(authActions.submitOTPFailure({ error: 'Invalid OTP code' }));
		}
	} catch (ex: any) {
		yield put(authActions.validateEmailFailure({ error: ex.message }));
	}
}

function* handleValidateEmailRequest({
	payload,
}: PayloadAction<{ email: string }>): Generator {
	try {
		const { email } = payload;
		console.log(email);
		// Validate email using Email class
		const emailInstance = new Email(email);
		yield put(authActions.validateEmailSuccess({ email: emailInstance.address }));
	} catch (ex: any) {
		console.log('ex', ex.message)
		yield put(authActions.validateEmailFailure({ error: ex.message }));
	}
}

function* handleLoginRequest({
	payload,
}: PayloadAction<{ email: string; password: string }>): Generator {
	try {
		// const { email, password } = payload;
		// // calling api activated code
		// const credential = new Credential(email, password);
		// const signInImpl = AuthImp.signIn.bind(AuthImp); // Binding the context
		// const signInResp = yield call(signInImpl, credential); // Calling the method
		// yield put(
		// 	authActions.loginSuccess({
		// 		user: signInResp?.user,
		// 		token: signInResp?.token,
		// 		refreshToken: signInResp?.refreshToken,
		// 	}),
		// );
	} catch (ex: any) {
		yield put(authActions.loginFailure({ error: ex.message }));
	}
}

function* handleRegisterRequest({
	payload,
}: PayloadAction<{
	email: string;
	password: string;
	name: string;
	phone: string;
}>): Generator {
	try {
		const { email, password, name, phone } = payload;
		// calling api activated code
		const credential = new Credential(email, password, name, phone);
		const signUpImpl = AuthImp.signUp.bind(AuthImp); // Binding the context
		const signInResp: any = yield call(signUpImpl, credential); // Calling the method
		yield put(
			authActions.registerSuccess({
				user: signInResp?.user,
				token: signInResp?.token,
				refreshToken: signInResp?.refreshToken,
			}),
		);
	} catch (ex: any) {
		console.log('ex', ex.message)
		yield put(authActions.registerFailure({ error: ex.message }));
	}
}

export function* signOut() {
	try {
		const refreshToken: string = yield call(
			helper.getDataFromAsyncStorage,
			constants.ASYNC_STORAGE_KEYS.REFRESH_TOKEN,
		);
		const logOutImpl = AuthImp.logOut.bind(AuthImp); // Binding the context
		yield call(logOutImpl, refreshToken);
		yield put(authActions.logoutSuccess());
	} catch (ex: any) {
		yield put(authActions.logoutFailure);
	}
}

export default function* authSaga() {
	yield takeLatest(authActions.submitEmail.type, checkValidateEmail);
	yield takeLatest(authActions.validateEmailRequest.type, handleValidateEmailRequest);
	yield takeLatest(authActions.loginRequest.type, handleLoginRequest);
	yield takeLatest(authActions.registerRequest.type, handleRegisterRequest);
	yield takeLatest(authActions.logoutRequest.type, signOut);
}
