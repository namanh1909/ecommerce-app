import * as yup from 'yup';
import yupValidate from './yupValidate';

export const registerSchema =
    yup.object().shape({
        name: yupValidate.name(),
        email: yupValidate.email(),
        password: yupValidate.password(),
        phone: yupValidate.phone()
    });


export const loginSchema = yup.object().shape({
    email: yupValidate.email(),
    password: yupValidate.password(),
});

export const profileSchema = yup.object().shape({
    name: yupValidate.name(),
    birthday: yupValidate.birthday(),
    email: yupValidate.email(),
    phone: yupValidate.phone(),
    gender: yupValidate.gender(),
})