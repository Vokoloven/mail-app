import { useState } from 'react';
import Badge from '@mui/material/Badge';
import ListIcon from '@mui/icons-material/List';
import { CustomDrawer } from '../Drawer';

export const CustomBadge = () => {
    const [state, setState] = useState<{ right: boolean }>({
        right: false
    });

    return (
        <>
            <Badge
                badgeContent={7}
                max={99}
                color="error"
                sx={(theme) => ({
                    [theme.breakpoints.up('tablet')]: {
                        display: 'none'
                    }
                })}
            >
                <ListIcon sx={{ color: 'violet.main' }} />
            </Badge>
            <CustomDrawer state={state} setState={setState} />
        </>
    );
};
