import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { CustomBottomNavigation } from 'components/BottomNavigation';
import { CustomAppBar } from 'components/AppBar';
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
            <CustomBottomNavigation />
        </Box>
    );
};
