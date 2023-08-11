import { toggleDrawer } from './toggleDrawer';
import { TProps } from 'types/tDrawer';
import { DrawerList } from './DrawerList';
import { Drawer } from '@mui/material';

export const CustomDrawer = ({ state, setState }: TProps) => {
    return (
        <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false, setState, state)}
        >
            <DrawerList setState={setState} state={state} />
        </Drawer>
    );
};
