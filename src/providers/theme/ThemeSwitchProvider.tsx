import { FC, ReactNode, useState } from 'react';
import ThemeSwitchContext, { ThemeType } from './ThemeSwitchContext';

interface IProps {
    children?: ReactNode;
}

const ThemeSwitchProvider: FC<IProps> = ({children}) => {
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
