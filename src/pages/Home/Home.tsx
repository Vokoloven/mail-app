import { Form } from 'components/form';
import { Box, Typography } from '@mui/material';
import { AdaptiveContainer } from 'components/container';
import { HomeCard } from 'components/ui/Cards';
import { Sidebar } from 'components/ui/Sidebar';

const Home = () => {
    return (
        <AdaptiveContainer>
            <Box
                component={'main'}
                sx={(theme) => ({
                    [theme.breakpoints.up('tablet')]: {
                        display: 'flex',
                        flexDirection: 'column'
                    }
                })}
            >
                <Typography
                    component={'h1'}
                    variant={'h4'}
                    sx={{ mb: 3, fontWeight: '500' }}
                >
                    Delivery checker
                </Typography>
                <Box
                    sx={(theme) => ({
                        [theme.breakpoints.up('tablet')]: {
                            display: 'flex'
                        }
                    })}
                >
                    <Box
                        sx={(theme) => ({
                            [theme.breakpoints.up('tablet')]: {
                                flexGrow: 1
                            }
                        })}
                    >
                        <Box
                            sx={(theme) => ({
                                [theme.breakpoints.up('tablet')]: {
                                    maxWidth: '420px'
                                }
                            })}
                        >
                            <Form />
                            <HomeCard />
                        </Box>
                    </Box>
                    <Sidebar />
                </Box>
            </Box>
        </AdaptiveContainer>
    );
};

export default Home;
