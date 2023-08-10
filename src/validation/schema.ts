import * as yup from 'yup';

const regExp = /^20[0-9]{12}$/;

export const schema = yup.object().shape({
    ttn: yup
        .string()
        .matches(regExp, 'Format: 20 **** **** **** digits')
        .required()
});
