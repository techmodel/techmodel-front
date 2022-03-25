import _ from 'lodash';
import { DefaultTheme } from 'styled-components';
import commonTheme from '../commonTheme';

export default _.merge({
    colors: {
        text: {
            primary: '#000000',
            secondary: '#646464',
            subtle: '#afafaf',
            soft: '#929292',
        },
        success: '#00ff4c',
        gold: '#f1d95b',
        warning: '#cf9875',
        error: '#ba3f3f',
        body: '#f6f6f6',
        link: '#1b62cc',
    },
    box: {
        bg: '#e7e7e7',
    },
    card: {
        bg: '#fbfbfb',
        boxShadow: '#00000021 0 3px 40px 0px',
    },
    button: {
        bg: {
            primary: '#ffed00',
            secondary: '#ffffff',
            textButton: 'transparent',
        },
        text: {
            primary: '#000000',
            secondary: '#646464',
            textButton: '#646464',
        }
    }
}, commonTheme) as DefaultTheme;
