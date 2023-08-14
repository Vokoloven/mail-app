import { useState } from 'react';
import {
    Container,
    Paper,
    BottomNavigation,
    BottomNavigationAction
} from '@mui/material';
import { bottomPages } from './pages';
import { Link } from 'react-router-dom';
import { useLoc } from 'hooks';

export const CustomBottomNavigation = () => {
    const { bottomNav } = useLoc();
    const [value, setValue] = useState(bottomNav);

    return (
        <Container
            sx={(theme) => ({
                pt: 10,
                [theme.breakpoints.up('tablet')]: {
                    display: 'none'
                }
            })}
        >
            <Paper
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0
                }}
                elevation={4}
            >
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(_, newValue) => {
                        setValue(newValue);
                    }}
                    sx={{
                        justifyContent: 'space-around'
                    }}
                >
                    {bottomPages.map(({ id, label, icon, link }) => (
                        <BottomNavigationAction
                            aria-label={label.toLocaleLowerCase()}
                            component={Link}
                            to={link}
                            key={id}
                            label={label}
                            icon={icon}
                            sx={{
                                '&.Mui-selected': {
                                    color: 'violet.dark'
                                }
                            }}
                        />
                    ))}
                </BottomNavigation>
            </Paper>
        </Container>
    );
};
