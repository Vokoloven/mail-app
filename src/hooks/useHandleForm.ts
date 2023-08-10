import { useState } from 'react';
import {
    useForm,
    SubmitHandler,
    SubmitErrorHandler,
    FieldErrors
} from 'react-hook-form';
import { schema } from 'validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';
import { TInputs } from 'types/tForm';
import { fetchTrackingByTtn, setList } from 'redux/serviceSlice';
import { nanoid } from 'nanoid';

const id = nanoid();

export const useHandleForm = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { register, handleSubmit } = useForm<TInputs>({
        resolver: yupResolver(schema)
    });

    const [error, setError] = useState<FieldErrors<TInputs>>({});

    const onSubmit: SubmitHandler<TInputs> = ({ ttn }) => {
        dispatch(fetchTrackingByTtn(ttn));
        dispatch(setList([{ id, ttn }]));
        setError({});
    };
    const onError: SubmitErrorHandler<TInputs> = (err) => {
        setError(err);
    };

    return { register, error, handleSubmit, onSubmit, onError };
};
