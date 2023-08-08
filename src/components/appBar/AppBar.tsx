import { Link } from 'react-router-dom';
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Container,
    Button
} from '@mui/material';
import { CustomBadge } from 'components/Badge';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { TPages } from 'types';

const pages: TPages[] = [
    { id: '1', label: 'Home', link: '/' },
    { id: '2', label: 'Office', link: 'office' }
];

export const CustomAppBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                sx={{ bgcolor: 'violet.main' }}
                elevation={4}
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
                            <LocalShippingIcon sx={{ mr: 2 }} />
                            {pages.map(({ id, label, link }) => (
                                <Button
                                    key={id}
                                    component={Link}
                                    to={link}
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block'
                                    }}
                                >
                                    {label}
                                </Button>
                            ))}
                        </Box>
                        <IconButton
                            sx={{
                                color: 'violet.contrastText',
                                '&:hover': {
                                    bgcolor: 'action.customHover'
                                }
                            }}
                        >
                            <CustomBadge />
                        </IconButton>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
