import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

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
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
