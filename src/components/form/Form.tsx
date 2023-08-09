import { useState } from 'react';
import { Box } from '@mui/material';
import {
    useForm,
    SubmitHandler,
    SubmitErrorHandler,
    FieldErrors
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from 'components/form';
import { CustomButton } from 'components/ui/Button';
import { schema } from 'validation';
import { TInputs } from 'types/tForm';

export const Form = () => {
    const { register, handleSubmit, setValue } = useForm<TInputs>({
        resolver: yupResolver(schema)
    });
    const [error, setError] = useState<FieldErrors<TInputs>>({});

    const onSubmit: SubmitHandler<TInputs> = (data) => {
        setValue('ttn', '');
        setError({});
    };
    const onError: SubmitErrorHandler<TInputs> = (err) => {
        setError(err);
    };

    return (
        <Box
            component={'form'}
            autoComplete={'off'}
            onSubmit={handleSubmit(onSubmit, onError)}
        >
            <Input register={register} error={error} />
            <CustomButton
                sx={{ mt: 4, width: '100%' }}
                aria-label={'submit'}
                type={'submit'}
            >
                Get status TTN
            </CustomButton>
        </Box>
    );
};
