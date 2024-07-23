import { call, put, takeLatest } from 'redux-saga/effects';
import { Credential } from '@/core/entities';
import { AuthenInteractor } from '@/core/usecases/authen';
import { container } from '@/core/framworks/configs';
import { PayloadAction } from '@reduxjs/toolkit';
import helper from '@/utilities/helper';
import constants from '@/constants';
import { authActions } from '../slices/authSlice';

const AuthImp: AuthenInteractor = container.get(AuthenInteractor);

function* handleLoginRequest({
	payload,
}: PayloadAction<{ email: string; password: string }>): Generator {
	try {
		const { email, password } = payload;
		// calling api activated code
		const credential = new Credential(email, password);
		const signInImpl = AuthImp.signIn.bind(AuthImp); // Binding the context
		const signInResp: any = yield call(signInImpl, credential); // Calling the method
		yield put(
			authActions.loginSuccess({
				user: signInResp?.user,
				token: signInResp?.token,
				refreshToken: signInResp?.refreshToken,
			}),
		);
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
	yield takeLatest(authActions.loginRequest.type, handleLoginRequest);
	yield takeLatest(authActions.registerRequest.type, handleRegisterRequest);
	yield takeLatest(authActions.logoutRequest.type, signOut);
}
