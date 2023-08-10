import { Paper } from '@mui/material';
import { Input } from 'components/form';
import { CustomButton } from 'components/ui/Button';
import { useHandleForm } from 'hooks';

export const Form = () => {
    const { register, error, handleSubmit, onSubmit, onError } =
        useHandleForm();

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
