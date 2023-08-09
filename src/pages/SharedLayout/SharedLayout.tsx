import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { CustomBottomNavigation } from 'components/ui/BottomNavigation';
import { CustomAppBar } from 'components/ui/AppBar';
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
