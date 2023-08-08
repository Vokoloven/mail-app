import '@mui/material';
import { alpha, getContrastRatio } from '@mui/material';
import { Theme } from '@emotion/react';

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false;
        sm: false;
        md: false;
        lg: false;
        xl: false;
        mobile: true;
        tablet: true;
        laptop: true;
        desktop: true;
    }
    interface Palette {
        violet: Palette['primary'];
    }

    interface PaletteOptions {
        violet?: PaletteOptions['primary'];
    }
}

const violetBase = '#7F00FF';
const violetMain = alpha(violetBase, 0.7);

export const getDesignTokens = (): Theme => ({
    palette: {
        violet: {
            main: violetMain,
            light: alpha(violetBase, 0.5),
            dark: alpha(violetBase, 0.9),
            contrastText:
                getContrastRatio('##7F00FF', '#fff') > 4.5 ? '#fff' : '#111'
        }
    },
    breakpoints: {
        values: {
            mobile: 320,
            tablet: 768,
            laptop: 1024,
            desktop: 1440
        }
    }
});
