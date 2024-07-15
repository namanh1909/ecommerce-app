import { call, select, takeLatest } from "redux-saga/effects";
import { Credential } from "@/core/entities";
import { AuthenInteractor } from "@/core/useCase/authen";
import { container } from "@/core/framworks/configs";
import { authActions } from "../slices/authSlice";
import { PayloadAction } from "@reduxjs/toolkit";

const AuthImp: AuthenInteractor = container.get(AuthenInteractor);

interface SignInParams {
    payload: {
        email: string;
        password: string;
    };
}

function* handleGetUserInfoRequest({ payload }: PayloadAction<{ email: string; password: string }>): Generator {
    try {
        console.log('payload', payload)
        const { email, password } = payload;
        // calling api activated code
        const credential = new Credential(email, password);
        const signInImpl = AuthImp.signIn.bind(AuthImp); // Binding the context
        const signInResp = yield call(signInImpl, credential); // Calling the method
        console.log('signInResp', signInResp)
        // const { id_token, refresh_token } = signInResp;
        // yield registerDevice();
        // yield put({
        //     type: AuthTypes.LOGIN_SUCCESS,
        //     payload: {
        //         token: id_token,
        //         refreshToken: refresh_token,
        //         havePincode: !!user?.pincode,
        //     },
        // });
    } catch (ex) {
        // yield put({
        //     type: AuthTypes.LOGIN_FAILURE,
        //     payload: { error: { ...ex, message: ex.message || '' } },
        // });
    }
}
export default function* authSaga() {
    yield takeLatest(authActions.loginRequest.type, handleGetUserInfoRequest);
}
