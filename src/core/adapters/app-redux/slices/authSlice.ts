import { AnyAction, CaseReducer, createSlice, PayloadAction, Action } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { CommonStatus } from './types';
import { generatePersistConfig } from '@/utilities/helper';
import { Credential, User } from '@/core/entities';
import { createSelector } from "@reduxjs/toolkit";

interface AuthState {
    token: string | null;
    user: User | null;
    errors: any | null;
    loggedIn: boolean;
    isProcessing: boolean;
    refreshToken: string | null;
}

type Reducer<A extends Action<any> = AnyAction> = CaseReducer<AuthState, A>;

const initialState: AuthState = {
    token: null,
    user: null,
    errors: null,
    loggedIn: false,
    isProcessing: false,
    refreshToken: null,
};

const loginRequest: Reducer<PayloadAction<any>> = (state, { payload }: any) => {
    state.isProcessing = true;
};

const loginSuccess: Reducer<PayloadAction<{ token: string; user: any; refreshToken: string }>> = (state, { payload }) => {
    state.isProcessing = false;
    state.token = payload.token;
    state.user = payload.user;
    state.refreshToken = payload.refreshToken;
    state.loggedIn = true;
    state.errors = null;
};

const loginFailure: Reducer<PayloadAction<any>> = (state, { payload }) => {
    state.isProcessing = false;
    state.errors = payload;
};

const logout: Reducer = (state) => {
    state.token = null;
    state.user = null;
    state.loggedIn = false;
    state.errors = null;
    state.isProcessing = false;
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginRequest,
        loginSuccess,
        loginFailure,
        logout,
    },
});

const persistConfig = generatePersistConfig('auth', ['token', 'user']);

export const authActions = authSlice.actions;
export default persistReducer<AuthState>(persistConfig, authSlice.reducer);


const AuthSelector = (state: any) => state.auth;

export const AuthSelectors = {
    getToken: createSelector(AuthSelector, (auth) => auth.token),
    errors: createSelector(AuthSelector, (auth) => auth.errors),
    isLoggedIn: createSelector(AuthSelector, (auth) => auth?.loggedIn ?? false),
    isProcessing: createSelector(AuthSelector, (auth) => auth.isProcessing),
    user: createSelector(AuthSelector, (auth) => auth.user),
    resellers: createSelector(AuthSelector, (auth) => auth.resellers),
    havePincode: createSelector(AuthSelector, (auth) => auth.havePincode),
};

