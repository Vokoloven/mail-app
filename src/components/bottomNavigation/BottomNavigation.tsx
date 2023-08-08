import { useState } from 'react';
import { Paper } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import { Link } from 'react-router-dom';

type TItems = {
    id: string;
    label: 'Home' | 'Office';
    icon: JSX.Element;
    link: '/' | 'office';
};

const items: TItems[] = [
    { id: '1', label: 'Home', icon: <HomeIcon />, link: '/' },
    { id: '2', label: 'Office', icon: <MapIcon />, link: 'office' }
];

export const CustomBottomNavigation = () => {
    const [value, setValue] = useState(0);

    return (
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
                {items.map(({ id, label, icon, link }) => (
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
    );
};
