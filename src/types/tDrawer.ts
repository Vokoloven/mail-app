import { SetStateAction } from 'react';

type TOpen = boolean;
type TAnchor = 'right';
type TSetState = React.Dispatch<SetStateAction<{ right: boolean }>>;
type TState = { right: boolean };

type TProps = {
    state: TState;
    setState: TSetState;
};

export type { TOpen, TAnchor, TSetState, TState, TProps };
