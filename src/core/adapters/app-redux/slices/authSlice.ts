import {
	AnyAction,
	CaseReducer,
	createSlice,
	PayloadAction,
	Action,
	createSelector,
} from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { generatePersistConfig } from '@/utilities/helper';
import { Credential, User } from '@/core/entities';

import { CommonStatus } from './types';

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

const loginSuccess: Reducer<
	PayloadAction<{ token: string; user: any; refreshToken: string }>
> = (state, { payload }) => {
	state.isProcessing = false;
	state.token = payload.token;
	state.refreshToken = payload.refreshToken;
	state.user = payload.user;
	state.loggedIn = true;
	state.errors = null;
};

const loginFailure: Reducer<PayloadAction<any>> = (state, { payload }) => {
	state.isProcessing = false;
	state.errors = payload;
};

const logoutRequest: Reducer = state => {
	state.isProcessing = true;
};

const logoutSuccess: Reducer = state => {
	state.token = null;
	state.user = null;
	state.loggedIn = false;
	state.errors = null;
	state.isProcessing = false;
	state.refreshToken = null;
};

const logoutFailure: Reducer<PayloadAction<any>> = (state, { payload }) => {
	state.isProcessing = false;
	state.errors = payload;
};

const registerRequest: Reducer<PayloadAction<any>> = (
	state,
	{ payload }: any,
) => {
	state.isProcessing = true;
};

const registerSuccess: Reducer<
	PayloadAction<{ token: string; user: any; refreshToken: string }>
> = (state, { payload }) => {
	state.isProcessing = false;
	state.token = payload.token;
	state.refreshToken = payload.refreshToken;
	state.user = payload.user;
	state.loggedIn = true;
	state.errors = null;
};

const registerFailure: Reducer<PayloadAction<any>> = (state, { payload }) => {
	state.isProcessing = false;
	state.errors = payload;
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginRequest,
		loginSuccess,
		loginFailure,
		logoutRequest,
		logoutSuccess,
		logoutFailure,
		registerRequest,
		registerSuccess,
		registerFailure,
	},
});

const persistConfig = generatePersistConfig('auth', ['token', 'user']);

export const authActions = authSlice.actions;
export default persistReducer<AuthState>(persistConfig, authSlice.reducer);

const AuthSelector = (state: any) => state.auth;

export const AuthSelectors = {
	getToken: createSelector(AuthSelector, auth => auth.token),
	getRefreshToken: createSelector(AuthSelector, auth => auth.refreshToken),
	errors: createSelector(AuthSelector, auth => auth.errors),
	isLoggedIn: createSelector(AuthSelector, auth => auth?.loggedIn ?? false),
	isProcessing: createSelector(AuthSelector, auth => auth.isProcessing),
	user: createSelector(AuthSelector, auth => auth.user),
	resellers: createSelector(AuthSelector, auth => auth.resellers),
	havePincode: createSelector(AuthSelector, auth => auth.havePincode),
};
