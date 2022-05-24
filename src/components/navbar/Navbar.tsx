import { FC } from 'react';
import {
    Nav,
    Logo,
    Controls,
    EditBtn,
    LogoutBtn,
    Greeting,
    Username
} from './Navbar.styled';

interface IProps {
    username?: string;
};

const Navbar: FC<IProps> = ({username = 'יפתח'}) => {
    return (
        <Nav>
            <Logo>TechModel</Logo>
            <Controls>
                <Greeting>
                    שלום,
                    <Username>{username}</Username>!
                </Greeting>
                <LogoutBtn>התנתק</LogoutBtn>
                <EditBtn>ערוך פרטים אישיים</EditBtn>
            </Controls>
        </Nav>
    )
}

export default Navbar;
