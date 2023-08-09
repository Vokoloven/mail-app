import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { toggleDrawer } from './toggleDrawer';
import { TProps, TAnchor } from 'types/tDrawer';

export const CustomDrawer = ({ state, setState }: TProps) => {
    const list = (anchor: TAnchor) => (
        <Box
            role="presentation"
            onClick={toggleDrawer(anchor, false, setState, state)}
            onKeyDown={toggleDrawer(anchor, false, setState, state)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map(
                    (text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? (
                                        <InboxIcon />
                                    ) : (
                                        <MailIcon />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    )
                )}
            </List>
            <Divider />
        </Box>
    );

    return (
        <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false, setState, state)}
        >
            {list('right')}
        </Drawer>
    );
};
