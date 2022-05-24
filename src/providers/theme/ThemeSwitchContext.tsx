import { Dispatch, SetStateAction, createContext } from 'react';
import themes from './themes';


export type ThemeType = keyof typeof themes;

interface ThemeSwitchContext {
    theme: ThemeType;
    setTheme: Dispatch<SetStateAction<ThemeType>>;
}

export default createContext<ThemeSwitchContext>({
    theme: 'light',
    setTheme: (type) => {},
});
