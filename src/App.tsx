import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'pages/SharedLayout';
import { lazy } from 'react';

const Home = lazy(() => import('pages/Home'));
const Office = lazy(() => import('pages/Office'));

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route path={'office'} element={<Office />} />
            </Route>
        </Routes>
    );
};
