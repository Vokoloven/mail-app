import TextField from '@mui/material/TextField';

export const Input = () => {
    return (
        <TextField
            id="outlined-basic"
            label="TTN"
            variant="outlined"
            required
            sx={{
                width: '100%',
                '& label.Mui-focused': {
                    color: 'violet.main'
                },
                '& .MuiOutlinedInput-root.Mui-focused': {
                    '& fieldset': {
                        borderColor: 'violet.main'
                    }
                }
            }}
        />
    );
};
