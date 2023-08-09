import { Box, AppBar, Toolbar, Container } from '@mui/material';
import { CustomBadge } from 'components/ui/Badge';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { CustomTab } from 'components/ui/Tab';

export const CustomAppBar = () => {
    return (
        <Box sx={{ pb: 4 }}>
            <AppBar
                position="static"
                sx={{ bgcolor: 'background.paper' }}
                elevation={1}
            >
                <Toolbar>
                    <Container
                        sx={(theme) => ({
                            display: 'flex',
                            alignItems: 'center',
                            maxWidth: theme.breakpoints.values.desktop,
                            padding: 0
                        })}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexGrow: 1
                            }}
                        >
                            <LocalShippingIcon
                                sx={{ mr: 10, color: 'violet.main' }}
                            />
                            <Box
                                sx={(theme) => ({
                                    display: 'flex',
                                    [theme.breakpoints.down('tablet')]: {
                                        display: 'none'
                                    }
                                })}
                            >
                                <CustomTab />
                            </Box>
                        </Box>
                        <CustomBadge />
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
