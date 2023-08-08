import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const SharedLayout = () => {
    return (
        <div>
            <div>SharedLaout</div>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
    );
};
