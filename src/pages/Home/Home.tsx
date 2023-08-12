import { Form } from 'components/form';
import { Box, Typography } from '@mui/material';
import { AdaptiveContainer } from 'components/container';
import { HomeCard } from 'components/ui/Cards';

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
                <HomeCard />
            </Box>
        </AdaptiveContainer>
    );
};

export default Home;
