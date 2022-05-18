import { FC, ReactNode } from 'react';
import './side.css';

interface IProps {
    children?: ReactNode;
}

const Side: FC<IProps> = ({children}) => {
    return (
        <aside id='sidebar-view'>
            {children}
        </aside>
    )
}

export default Side;
