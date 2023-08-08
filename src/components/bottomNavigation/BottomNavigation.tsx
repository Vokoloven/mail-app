import { useState } from 'react';
import {
    Container,
    Paper,
    BottomNavigation,
    BottomNavigationAction
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import { Link } from 'react-router-dom';
import { TPages } from 'types';

const pages: TPages[] = [
    { id: '1', label: 'Home', icon: <HomeIcon />, link: '/' },
    { id: '2', label: 'Office', icon: <MapIcon />, link: 'office' }
];

export const CustomBottomNavigation = () => {
    const [value, setValue] = useState(0);

    return (
        <Container
            sx={(theme) => ({
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
                    {pages.map(({ id, label, icon, link }) => (
                        <BottomNavigationAction
                            component={Link}
                            to={link}
                            key={id}
                            label={label}
                            icon={icon}
                            sx={{
                                '&.Mui-selected': {
                                    color: 'violet.main'
                                }
                            }}
                        />
                    ))}
                </BottomNavigation>
            </Paper>
        </Container>
    );
};
