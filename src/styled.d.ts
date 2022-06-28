import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            text: {
                primary: string,
                secondary: string,
                subtle: string,
                soft: string,
            },
            success: string,
            error: string,
            warning: string,
            gold: string,
            body: string,
            link: string,
        },
        box: {
            bg: string,
            borderRadius: string,
        },
        card: {
            bg: string,
            borderRadius: string,
            boxShadow: string,
        },
        layout: {
            margin: string,
            padding: string,
        },
        font: {
            size: {
                title: '1.325em',
                header: '1.125em',
                secondary: '0.875em',
                small: '0.75em',
            },
            family: {
                main: 'Assistent',
            },
        },
        button: {
            bg: {
                primary: string,
                secondary: string,
                textButton: string,
            },
            text: {
                primary: string,
                secondary: string,
                textButton: string,
            }
            borderRadius: string,
        }
    }
}
