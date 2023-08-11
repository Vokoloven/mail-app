import {
    Box,
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import { toggleDrawer } from './toggleDrawer';
import { useSelector, useDispatch } from 'react-redux';
import { selectService } from 'redux/selectors';
import { setList, setTtn } from 'redux/serviceSlice';
import NumbersIcon from '@mui/icons-material/Numbers';
import DeleteIcon from '@mui/icons-material/Delete';
import HistoryIcon from '@mui/icons-material/History';
import { TProps } from 'types/tDrawer';
import { fetchTrackingByTtn } from 'redux/serviceSlice';
import { AppDispatch } from 'redux/store';
import { formatter } from 'utils';
import React from 'react';

export const DrawerList = ({ setState, state }: TProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const { list } = useSelector(selectService);

    return (
        <Box
            role="presentation"
            onClick={toggleDrawer('right', false, setState, state)}
            onKeyDown={toggleDrawer('right', false, setState, state)}
        >
            <List>
                <ListItem>
                    <HistoryIcon sx={{ color: 'violet.main', mr: 4 }} />
                    <ListItemText>TTN History</ListItemText>
                </ListItem>
                <Divider />
                {list.length > 0 && (
                    <React.Fragment>
                        {list.map(({ ttn }, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton
                                    onClick={() => {
                                        dispatch(
                                            fetchTrackingByTtn(
                                                formatter(ttn!, 'unformat')
                                            )
                                        );
                                        dispatch(setTtn(ttn!));
                                    }}
                                    aria-label="list"
                                    sx={{
                                        color: 'violet.main',
                                        '&:hover': {
                                            bgcolor: 'action.violetHover'
                                        }
                                    }}
                                >
                                    <ListItemIcon>
                                        <NumbersIcon
                                            sx={{ color: 'violet.main' }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary={ttn} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                        <Divider />
                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={() => dispatch(setList({}))}
                                aria-label="remove"
                                sx={{
                                    color: 'error.main',
                                    '&:hover': {
                                        bgcolor: 'action.errorHover'
                                    }
                                }}
                            >
                                <ListItemIcon>
                                    <DeleteIcon sx={{ color: 'error.main' }} />
                                </ListItemIcon>
                                <ListItemText primary={'Clear List'} />
                            </ListItemButton>
                        </ListItem>
                    </React.Fragment>
                )}
            </List>
        </Box>
    );
};
