import { TPages } from 'types';
import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';

export const bottomPages: TPages[] = [
    { id: '1', label: 'Home', icon: <HomeIcon />, link: '/' },
    { id: '2', label: 'Office', icon: <MapIcon />, link: 'office' }
];
