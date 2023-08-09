import { useState } from 'react';
import { Paper } from '@mui/material';

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
import { fetchTrackingByTtn } from 'redux/serviceSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';

export const Form = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { register, handleSubmit } = useForm<TInputs>({
        resolver: yupResolver(schema)
    });
    const [error, setError] = useState<FieldErrors<TInputs>>({});

    const onSubmit: SubmitHandler<TInputs> = ({ ttn }) => {
        dispatch(fetchTrackingByTtn(ttn));
        setError({});
    };
    const onError: SubmitErrorHandler<TInputs> = (err) => {
        setError(err);
    };

    return (
        <Paper
            component={'form'}
            autoComplete={'off'}
            onSubmit={handleSubmit(onSubmit, onError)}
            elevation={4}
            sx={{ p: 4 }}
        >
            <Input register={register} error={error} />
            <CustomButton
                sx={{ mt: 4, width: '100%' }}
                aria-label={'submit'}
                type={'submit'}
            >
                get status ttn
            </CustomButton>
        </Paper>
    );
};
