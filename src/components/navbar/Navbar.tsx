import { FC } from 'react';
import {
    Logo,
    Controls,
    EditBtn,
    LogoutBtn,
    Greeting,
    Username
} from './Navbar.styled';
import styles from './Navbar.module.scss'

interface IProps {
    username?: string;
};

const Navbar: FC<IProps> = ({username = 'יפתח'}) => {
    return (
        <nav className={styles.container}>
            <Logo>TechModel</Logo>
            <Controls>
                <Greeting>
                    שלום,
                    <Username>{username}</Username>!
                </Greeting>
                <LogoutBtn>התנתק</LogoutBtn>
                <EditBtn>ערוך פרטים אישיים</EditBtn>
            </Controls>
        </nav>
    )
}

export default Navbar;
