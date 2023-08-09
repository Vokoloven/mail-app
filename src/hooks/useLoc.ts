import { useLocation } from 'react-router-dom';

export const useLoc = () => {
    const { pathname } = useLocation();

    const handlePathnameString = (pathname: string) => {
        return pathname.replace(/^[/]/, () => {
            return pathname === '/' ? '/' : '';
        });
    };
    const handlePathnameNumber = (pathname: string) => {
        return pathname.replace(/^[/\w]+/, () => {
            return pathname === '/' ? '0' : '1';
        });
    };

    return {
        topNav: handlePathnameString(pathname),
        bottomNav: Number(handlePathnameNumber(pathname))
    };
};
