import { useEffect, useRef } from 'react';

export const useFonts = () => {
    const loadFonts = useRef(true);

    useEffect(() => {
        if (loadFonts.current) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href =
                'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap';
            document.head.appendChild(link);

            return () => {
                loadFonts.current = false;
            };
        }
    }, []);
};
