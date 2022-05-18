import { FC, ReactNode } from 'react';
import './main.css';

interface IProps {
    children?: ReactNode;
}

const Main: FC<IProps> = ({children}) => {
    return (
        <main id="main-view">{children}</main>
    );
}

export default Main;
