import { TChildren } from 'types/tChildren';
import { Box } from '@mui/material';

export const Form = ({ children }: TChildren) => {
    return (
        <Box component={'form'} autoComplete={'off'}>
            {children}
        </Box>
    );
};
