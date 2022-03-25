import React from 'react';
import themes from './themes';


export type ThemeType = keyof typeof themes;

interface ThemeSwitchContext {
    theme: ThemeType;
    setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
}

export default React.createContext<ThemeSwitchContext>({
    theme: 'light',
    setTheme: (type) => {},
});
