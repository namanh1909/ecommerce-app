import i18next from 'i18next';
import * as yup from 'yup';
import { requireField } from '../format';
import {
    PASSWORD_MAX_LENGTH,
    PASSWORD_MIN_LENGTH,
    REGEX_EMAIL,
    REGEX_PASSWORD,
    REGEX_PHONE,
    USERNAME_MAX_LENGTH,
    USERNAME_MIN_LENGTH,
} from '../validate';
import { useTranslation } from 'react-i18next';

const yupValidate = () => {
    const { t } = useTranslation('error');

    return {
        name: () =>
            yup
                .string()
                .required(() => requireField('name'))
                .trim(t('trimSpace'))
                .strict(true)
                .min(USERNAME_MIN_LENGTH, t('nameLength'))
                .max(USERNAME_MAX_LENGTH, t('nameLength')),

        username: () =>
            yup
                .string()
                .required(() => requireField('username'))
                .trim(t('trimSpace'))
                .strict(true)
                .min(USERNAME_MIN_LENGTH, t('nameLength'))
                .max(USERNAME_MAX_LENGTH, t('nameLength')),

        email: () =>
            yup
                .string()
                .required(() => requireField('email'))
                .email(t('emailInvalid'))
                .matches(REGEX_EMAIL, t('emailInvalid')),

        phone: () =>
            yup
                .string()
                .required(() => requireField('phone'))
                .matches(REGEX_PHONE, t('phoneInvalid')),

        gender: () =>
            yup
                .string()
                .required(() => requireField('gender')),

        password: (ref?: string, isMatchCurrentPassword = true): any => {
            if (ref) {
                if (!isMatchCurrentPassword) {
                    return yupValidate().password().not([yup.ref(ref), null], t('duplicatePassword'));
                }

                return yup
                    .string()
                    .required(() => requireField('passwordConfirm'))
                    .oneOf([yup.ref(ref)], t('passwordNotMatch'));
            }

            return yup
                .string()
                .required(() => requireField('password'))
                .trim(t('trimSpace'))
                .strict(true)
                .min(PASSWORD_MIN_LENGTH, t('passwordLength'))
                .max(PASSWORD_MAX_LENGTH, t('passwordLength'))
                .matches(REGEX_PASSWORD, t('validatePassword'));
        },
        birthday: () => yup.string().required(() => requireField('birthday')),
        labelPicker: () => yup.string().required(() => requireField('labelPicker')),
        policy: () => yup.string().required(() => requireField('policy')),
        notRequired: () => yup.string().notRequired()
    };
};

export default yupValidate;