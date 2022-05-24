import styled from 'styled-components';

export const Nav = styled.nav`
    height: 100%;
    width: calc(100% - 40px);
    background-color: rgb(71,145,255);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3),
    inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`;

export const Logo = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
    color: white;
    font-style: italic;
    letter-spacing: 3px;
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.5),
    0 0 3px rgba(0, 0, 0, 0.5);
`;

export const Controls = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 20%;
`;

const NavBtn = styled.button`
    border: none;
    border-radius: 3px;
    padding: 5px 10px;
    color: white;
    transition: transform 150ms;

    :hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`;

export const EditBtn = styled(NavBtn)`
    background-color: #B1B4B5;
`;

export const LogoutBtn = styled(NavBtn)`
    background-color: rgba(255, 0, 0, 0.5);
`;

export const Greeting = styled.div`
    display: flex;
    direction: rtl;
    color: white;
`;

export const Username = styled.div`
    --username-padding: 2px;
    padding: 0 var(--username-padding);
    margin-right: calc(5px - var(--username-padding));
    border-bottom: 1px solid white;
    height: 20px;
`;
