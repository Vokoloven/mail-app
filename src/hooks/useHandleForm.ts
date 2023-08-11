import React, { useState } from 'react';
import {
    useForm,
    SubmitHandler,
    SubmitErrorHandler,
    FieldErrors
} from 'react-hook-form';
import { schema } from 'validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'redux/store';
import { TInputs } from 'types/tForm';
import { fetchTrackingByTtn, setList } from 'redux/serviceSlice';
import { nanoid } from 'nanoid';
import { formatter, duplicator } from 'utils';
import { selectService } from 'redux/selectors';

const id = nanoid();

export const useHandleForm = () => {
    const { list } = useSelector(selectService);

    const dispatch = useDispatch<AppDispatch>();
    const { register, handleSubmit, setValue } = useForm<TInputs>({
        resolver: yupResolver(schema)
    });
    const [error, setError] = useState<FieldErrors<TInputs>>({});

    const onSubmit: SubmitHandler<TInputs> = ({ ttn }) => {
        dispatch(fetchTrackingByTtn(formatter(ttn, 'unformat')));
        if (!duplicator(list, ttn)) dispatch(setList({ id, ttn }));
        setError({});
    };
    const onError: SubmitErrorHandler<TInputs> = (err) => {
        setError(err);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue('ttn', formatter(e.target.value, 'format'));
    };

    return {
        register,
        error,
        handleSubmit,
        onSubmit,
        onError,
        handleChange
    };
};
