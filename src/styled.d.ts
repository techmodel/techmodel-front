import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            success: string;
            error: string;
            warning: string;
            gold: string;
        };
        text: {
            primary: string;
            secondary: string;
            subtle: string;
            soft: string;
        };
        box: {
            bg: string;
            borderRadius: string;
        };
        card: {
            bg: string;
            borderRadius: string;
            boxShadow: string;
        };
    }
}
