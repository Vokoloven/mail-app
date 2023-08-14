import {
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Box
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { selectService } from 'redux/selectors';
import { setList, setTtn } from 'redux/serviceSlice';
import NumbersIcon from '@mui/icons-material/Numbers';
import DeleteIcon from '@mui/icons-material/Delete';
import HistoryIcon from '@mui/icons-material/History';
import { fetchTrackingByTtn } from 'redux/serviceSlice';
import { AppDispatch } from 'redux/store';
import { formatter } from 'utils';
import React from 'react';
import { useScreenDimensions } from 'hooks';

export const Sidebar = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { list } = useSelector(selectService);
    const { height } = useScreenDimensions();

    return (
        <Paper
            elevation={4}
            sx={(theme) => ({
                width: '280px',
                display: 'flex',
                flexDirection: 'column',
                maxHeight: `${height - 300}px`,
                overflow: 'hidden',
                overflowY: 'auto',

                [theme.breakpoints.down('tablet')]: {
                    display: 'none'
                }
            })}
        >
            <List sx={{ p: 0 }}>
                <ListItem>
                    <HistoryIcon sx={{ color: 'violet.main', mr: 4 }} />
                    <ListItemText>TTN History</ListItemText>
                </ListItem>
            </List>
            <Divider />
            <List>
                {Boolean(list.length) && (
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
                                    aria-label="list ttn"
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
                    </React.Fragment>
                )}
            </List>
            {Boolean(list.length) && (
                <Box>
                    <Divider />
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={() => dispatch(setList({}))}
                                aria-label="clear list"
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
                    </List>
                </Box>
            )}
        </Paper>
    );
};
