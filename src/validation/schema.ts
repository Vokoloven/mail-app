import * as yup from 'yup';

const regExp = /[0-9]+/;

export const schema = yup.object().shape({
    ttn: yup.string().matches(regExp, 'Wrong format').required()
});
