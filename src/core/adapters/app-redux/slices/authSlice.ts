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
import { User } from '@/core/entities';

interface AuthState {
	token: string | null;
	user: User | null;
	errors: string | null;
	loggedIn: boolean;
	isProcessing: boolean;
	refreshToken: string | null;
	errorEmail?: string | null;
	email?: string | null;
	otp?: string | null;
	otpError?: string | null;
}

type Reducer<A extends Action<any> = AnyAction> = CaseReducer<AuthState, A>;

const initialState: AuthState = {
	token: '',
	user: null,
	errors: '',
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
	state.errorEmail = null;
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
	state.errorEmail = payload;
};

const validateEmailRequest: Reducer<PayloadAction<{ email: string }>> = (state, { payload }) => {
	state.email = payload.email;
	state.isProcessing = true;
};

const validateEmailSuccess: Reducer<PayloadAction<{ email: string }>> = (state, { payload }) => {
	state.isProcessing = false;
	state.errors = null;
	state.email = payload.email;
	state.errorEmail = null;

};

const validateEmailFailure: Reducer<PayloadAction<{ error: string }>> = (state, { payload }) => {
	state.isProcessing = false;
	state.errorEmail = payload.error;
};

const submitEmail: Reducer = (state) => {
	state.isProcessing = true;
};

const submitOTPCode: Reducer = (state) => {
	state.isProcessing = true;
};
const validateOTPRequest: Reducer<PayloadAction<{ otp: string }>> = (state, { payload }) => {
	state.otp = payload.otp;
	state.isProcessing = true;
};

const validateOTPSuccess: Reducer<PayloadAction<{ otp: string }>> = (state, { payload }) => {
	state.isProcessing = false;
	state.errors = null;
	state.otp = payload.otp;
	state.otpError = null;
};

const validateOTPFailure: Reducer<PayloadAction<{ error: string }>> = (state, { payload }) => {
	state.isProcessing = false;
	state.otpError = payload.error;
};

const requestOTPRequest: Reducer<PayloadAction<{ email: string }>> = (state, { payload }) => {
	state.isProcessing = true;
	state.email = payload.email;
	state.errorEmail = null;
};

const requestOTPSuccess: Reducer<PayloadAction<{ otp: string }>> = (state, { payload }) => {
	state.isProcessing = false;
	state.otpError = null;
	state.otp = payload.otp;
};

const requestOTPFailure: Reducer<PayloadAction<{ error: string }>> = (state, { payload }) => {
	state.isProcessing = false;
};

const resetState: Reducer = (state) => {
	Object.assign(state, initialState);
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
		validateEmailRequest,
		validateEmailSuccess,
		validateEmailFailure,
		validateOTPRequest,
		validateOTPSuccess,
		validateOTPFailure,
		submitEmail,
		submitOTPCode,
		requestOTPRequest,
		requestOTPSuccess,
		requestOTPFailure,
		resetState
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
	getErrorEmail: createSelector(AuthSelector, auth => auth.errorEmail),
	getEmail: createSelector(AuthSelector, auth => auth.email),
	getOTP: createSelector(AuthSelector, auth => auth.otp),
	getOTPError: createSelector(AuthSelector, auth => auth.otpError),
};
