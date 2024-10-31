import * as yup from 'yup';
import i18next from 'i18next';

const { t } = i18next;

export const registerSchema = (isSignUp: boolean) => {
	return yup.object().shape({
		email: yup
			.string()
			.email(t('error:emailInvalid'))
			.required(t('error:emailInvalid')),
		name: isSignUp
			? yup.string().required(t('error:nameLength'))
			: yup.string().notRequired(),
		password: yup
			.string()
			.min(6, t('error:passwordLength'))
			.required(t('error:validatePassword')),
		phone: isSignUp
			? yup
				.string()
				.matches(/^[0-9]{10}$/, t('error:phoneInvalid'))
				.required(t('error:phoneInvalid'))
			: yup.string().notRequired(),
	});
};

export const loginSchema = yup.object().shape({
	email: yup
		.string()
		.email(t('error:emailInvalid'))
		.required(t('error:emailInvalid')),
	password: yup
		.string()
		.min(6, t('error:passwordLength'))
		.required(t('error:validatePassword')),
});

export const profileSchema = yup.object().shape({
	birthday: yup.string().required(t('error:validatePassword')),
	email: yup
		.string()
		.email(t('error:emailInvalid'))
		.required(t('error:emailInvalid')),
	gender: yup.string().required(t('error:validatePassword')),
	name: yup.string().required(t('error:nameLength')),
	phone: yup
		.string()
		.matches(/^[0-9]{10}$/, t('error:phoneInvalid'))
		.required(t('error:phoneInvalid')),
});
