import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LayoutAnimation } from 'react-native';
import { useTranslation } from 'react-i18next';
import { registerSchema } from '@/utilities/yup/yupSchema';
import { DEFAULT_FORM_LOGIN } from '@/utilities/yup/defaultForm';
import {
	AuthSelectors,
	authActions,
} from '@/core/adapters/app-redux/slices/authSlice';
import { useAppDispatch } from '@/core/adapters/app-redux/hooks';
import { useSelector } from 'react-redux';

const useAuth = ({ isSignInState }: { isSignInState: boolean }) => {
	const { t } = useTranslation('auth');
	const isProcessing = useSelector(AuthSelectors.isProcessing);
	const dispatch = useAppDispatch();
	const form = useForm({
		mode: 'onChange',
		defaultValues: DEFAULT_FORM_LOGIN,
		resolver: yupResolver(registerSchema(!isSignInState)),
		reValidateMode: 'onChange',
		criteriaMode: 'firstError',
	});

	const {
		formState: { isValid },
		handleSubmit,
		setValue,
		reset,
	} = form;

	useEffect(() => {
		reset();
	}, [isSignInState]);



	const onSubmit = handleSubmit(data => {
		isSignInState
			? dispatch(authActions.loginRequest(data))
			: dispatch(authActions.registerRequest(data));
	});

	return {
		isSignInState,
		form,
		onSubmit,
		isProcessing,
		t,
	};
};

export default useAuth;
