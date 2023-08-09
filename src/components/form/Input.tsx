import TextField from '@mui/material/TextField';
import { TProps } from 'types/tForm';

export const Input = ({ register, error }: TProps) => {
    return (
        <TextField
            id="outlined-basic"
            label="TTN *"
            variant="outlined"
            error={!!error.ttn}
            {...register('ttn')}
            helperText={error.ttn?.message}
            sx={{
                width: '100%',
                '& label.Mui-focused': {
                    color: 'violet.main'
                },
                '& label.Mui-focused.Mui-error': {
                    color: 'error.main'
                },
                '& .MuiOutlinedInput-root.Mui-focused': {
                    '& fieldset': {
                        borderColor: 'violet.main'
                    }
                },
                '& .MuiOutlinedInput-root.Mui-focused.Mui-error': {
                    '& fieldset': {
                        borderColor: 'error.main'
                    }
                }
            }}
        />
    );
};