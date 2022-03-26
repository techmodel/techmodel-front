import React, { useState } from 'react';
import ThemeSwitchContext, { ThemeType } from './ThemeSwitchContext';

const ThemeSwitchProvider: React.FC = ({children}) => {
    const [theme, setTheme] = useState<ThemeType>('light');

    return <ThemeSwitchContext.Provider
        value={{
            theme,
            setTheme,
        }}
    >
        {children}
    </ThemeSwitchContext.Provider>;
}

export default ThemeSwitchProvider;
