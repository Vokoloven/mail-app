import { useState } from 'react';
import { Badge, IconButton } from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import { CustomDrawer } from '../Drawer';
import { toggleDrawer } from '../Drawer/toggleDrawer';
import { useSelector } from 'react-redux';
import { selectService } from 'redux/selectors';

export const CustomBadge = () => {
    const [state, setState] = useState<{ right: boolean }>({
        right: false
    });
    const { list } = useSelector(selectService);

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
            <Badge badgeContent={list.length} max={99} color="error">
                <ListIcon sx={{ color: 'violet.main' }} />
            </Badge>
            <CustomDrawer state={state} setState={setState} />
        </IconButton>
    );
};
