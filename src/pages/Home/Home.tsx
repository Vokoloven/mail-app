import { Form } from 'components/form';
import { Box, Typography } from '@mui/material';
import { AdaptiveContainer } from 'components/container';

const Home = () => {
    return (
        <AdaptiveContainer>
            <Box component={'main'}>
                <Typography
                    component={'h1'}
                    variant={'h4'}
                    sx={{ mb: 3, fontWeight: '500' }}
                >
                    Delivery checker
                </Typography>
                <Form />
            </Box>
        </AdaptiveContainer>
    );
};

export default Home;
