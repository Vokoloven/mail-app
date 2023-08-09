import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AdaptiveContainer = styled(Container)(({ theme }) => ({
    padding: 0,
    [theme.breakpoints.up('mobile')]: {
        maxWidth: theme.breakpoints.values.mobile
    },
    [theme.breakpoints.up('tablet')]: {
        maxWidth: theme.breakpoints.values.tablet
    },
    [theme.breakpoints.up('laptop')]: {
        maxWidth: theme.breakpoints.values.laptop
    },
    [theme.breakpoints.up('desktop')]: {
        maxWidth: theme.breakpoints.values.desktop
    }
}));
