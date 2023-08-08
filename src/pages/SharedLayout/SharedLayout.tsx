import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { CustomBottomNavigation } from 'components/bottomNavigation';
import { CustomAppBar } from 'components/appBar';
import { Container, Box } from '@mui/material';

export const SharedLayout = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Box>
                <CustomAppBar />
                <Container>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet />
                    </Suspense>
                </Container>
            </Box>
            <Container
                sx={(theme) => ({
                    [theme.breakpoints.up('tablet')]: {
                        display: 'none'
                    }
                })}
            >
                <CustomBottomNavigation />
            </Container>
        </Box>
    );
};
