import { UseFormRegister, FieldErrors } from 'react-hook-form/dist/types';

export type TInputs = {
    ttn: string
};

export type TProps = {
    register: UseFormRegister<TInputs>;
    error: FieldErrors<TInputs>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
