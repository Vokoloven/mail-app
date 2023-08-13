import { useState, useEffect } from 'react';
const getScreenDimensions = () => {
    const { innerHeight: height, innerWidth: width } = window;

    return { height, width };
};

export const useScreenDimensions = () => {
    const [dimension, setDimension] = useState<{
        width: number;
        height: number;
    }>(getScreenDimensions());

    useEffect(() => {
        const setScreenDimensions = () => setDimension(getScreenDimensions());

        window.addEventListener('resize', setScreenDimensions);

        return () => {
            window.removeEventListener('resize', setScreenDimensions);
        };
    }, []);

    return dimension;
};
