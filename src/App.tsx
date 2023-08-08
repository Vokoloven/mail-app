import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'pages/SharedLayout';
import { lazy } from 'react';
import { useFonts, useTheme } from 'hooks';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

const Home = lazy(() => import('pages/Home'));
const Office = lazy(() => import('pages/Office'));

export const App = () => {
    useFonts();
    const theme = useTheme();

    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path="/" element={<SharedLayout />}>
                        <Route index element={<Home />} />
                        <Route path={'office'} element={<Office />} />
                    </Route>
                </Routes>
            </ThemeProvider>
        </>
    );
};
