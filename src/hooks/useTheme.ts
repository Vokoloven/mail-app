import { useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { getDesignTokens } from 'theme/getDesignTokens';

export const useTheme = () => {
    const theme = useMemo(() => createTheme(getDesignTokens()), []);

    return theme;
};
