import _ from 'lodash';
import { DefaultTheme } from 'styled-components';
import commonTheme from '../commonTheme';

export default _.merge({ // TODO: Adjust values to be actually dark; low priority
    colors: {
        success: '#00ff4c',
        gold: '#f1d95b',
        warning: '#cf9875',
        error: '#ba3f3f',
    },
    text: {
        primary: '#000000',
        secondary: '#646464',
        subtle: '#afafaf',
        soft: '#929292',
    },
    box: {
        bg: '#000000',
        borderRadius: '0.75em',
    },
    card: {
        bg: '#fbfbfb',
        borderRadius: '1.5em',
        boxShadow: '#00000021 0 3px 40px 0px',
    },
}, commonTheme) as DefaultTheme;
