import React from 'react';
import { TOpen, TAnchor, TSetState, TState } from 'types/tDrawer';

export const toggleDrawer =
    (anchor: TAnchor, open: TOpen, setState: TSetState, state: TState) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
        event.stopPropagation();
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({
            ...state,
            ...(typeof anchor !== 'boolean' && { [anchor]: open })
        });
    };
