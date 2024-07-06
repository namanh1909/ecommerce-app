import * as yup from 'yup';
import yupValidate from './yupValidate';

export const registerSchema = yup.object().shape({
    name: yupValidate.name(),
    email: yupValidate.email(),
    password: yupValidate.password(),
    confirmPassword: yupValidate.password('password'),
});

export const profileSchema = yup.object().shape({
    name: yupValidate.name(),
    birthday: yupValidate.birthday(),
    email: yupValidate.email(),
    phone: yupValidate.phone(),
    gender: yupValidate.gender(),
})