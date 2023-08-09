import { useState } from 'react';
import { Badge, IconButton } from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import { CustomDrawer } from '../Drawer';
import { toggleDrawer } from '../Drawer/toggleDrawer';

export const CustomBadge = () => {
    const [state, setState] = useState<{ right: boolean }>({
        right: false
    });

    return (
        <IconButton
            onClick={toggleDrawer('right', true, setState, state)}
            aria-label="list"
            sx={(theme) => ({
                color: 'violet.main',
                '&:hover': {
                    bgcolor: 'action.violetHover'
                },
                [theme.breakpoints.up('tablet')]: {
                    display: 'none'
                }
            })}
        >
            <Badge badgeContent={7} max={99} color="error">
                <ListIcon sx={{ color: 'violet.main' }} />
            </Badge>
            <CustomDrawer state={state} setState={setState} />
        </IconButton>
    );
};
