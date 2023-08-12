import { Paper, CircularProgress, Box, Typography } from '@mui/material';
import { Input } from 'components/form';
import { CustomButton } from 'components/ui/Button';
import { useHandleForm } from 'hooks';

export const Form = () => {
    const {
        register,
        error,
        handleSubmit,
        onSubmit,
        onError,
        handleChange,
        values,
        loading
    } = useHandleForm();

    return (
        <Paper
            component={'form'}
            autoComplete={'off'}
            onSubmit={handleSubmit(onSubmit, onError)}
            elevation={4}
            sx={{ p: 4 }}
        >
            <Input
                register={register}
                error={error}
                handleChange={handleChange}
                values={values}
            />
            <CustomButton
                sx={{ mt: 4, width: '100%' }}
                aria-label={'submit'}
                type={'submit'}
                disabled={loading === 'pending'}
            >
                {loading === 'pending' ? (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Typography
                            variant={'button'}
                            component={'p'}
                            sx={{ mr: 2 }}
                        >
                            Loading...
                        </Typography>
                        {
                            <CircularProgress
                                size={'1em'}
                                sx={{ color: 'violet.main' }}
                            />
                        }
                    </Box>
                ) : (
                    'get status ttn'
                )}
            </CustomButton>
        </Paper>
    );
};
