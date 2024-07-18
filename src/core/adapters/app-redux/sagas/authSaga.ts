import { call, put, select, takeLatest } from "redux-saga/effects";
import { Credential } from "@/core/entities";
import { AuthenInteractor } from "@/core/usecases/authen";
import { container } from "@/core/framworks/configs";
import { authActions } from "../slices/authSlice";
import { PayloadAction } from "@reduxjs/toolkit";

const AuthImp: AuthenInteractor = container.get(AuthenInteractor);

function* handleGetUserInfoRequest({ payload }: PayloadAction<{ email: string; password: string }>): Generator {
    try {
        const { email, password } = payload;
        // calling api activated code
        const credential = new Credential(email, password);
        const signInImpl = AuthImp.signIn.bind(AuthImp); // Binding the context
        const signInResp: any = yield call(signInImpl, credential); // Calling the method
        // yield registerDevice();
        yield put(authActions.loginSuccess({ user: signInResp?.user, token: signInResp?.token, refreshToken: signInResp?.refreshToken }));
    } catch (ex: any) {
        yield put(authActions.loginFailure({ error: ex.message }));

    }
}
export default function* authSaga() {
    yield takeLatest(authActions.loginRequest.type, handleGetUserInfoRequest);
}
