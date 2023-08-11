import * as yup from 'yup';

const regExp = /^\d{2}\s\d{4}\s\d{4}\s\d{4}$/;

export const schema = yup.object().shape({
    ttn: yup
        .string()
        .matches(regExp, 'Please write correct TTN number')
        .required()
});
