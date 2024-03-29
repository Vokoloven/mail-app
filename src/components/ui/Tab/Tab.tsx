import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { tabPages } from './pages';
import { Link } from 'react-router-dom';
import { useLoc } from 'hooks';

export const CustomTab = () => {
    const { topNav } = useLoc();
    const [value, setValue] = useState(topNav);

    const handleChange = (_: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="tabs"
                sx={{
                    '& .MuiTabs-indicator': {
                        bgcolor: 'violet.main'
                    }
                }}
            >
                {tabPages.map(({ id, label, link }) => (
                    <Tab
                        component={Link}
                        to={link}
                        key={id}
                        id={id}
                        value={link}
                        label={label}
                        sx={{
                            '&.Mui-selected': {
                                color: 'violet.main'
                            }
                        }}
                    />
                ))}
            </Tabs>
        </Box>
    );
};
