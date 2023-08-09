import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.violet.main,
    color: theme.palette.violet.contrastText,
    border: '1px solid transparent',
    '&:hover': {
        color: theme.palette.violet.main,
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.violet.main}`
    }
}));
