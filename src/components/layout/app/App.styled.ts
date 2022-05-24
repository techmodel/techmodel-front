import styled from 'styled-components';

export const AppWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.header`
    height: var(--header-height);
    width: 100%;
    position: relative;
`;

export const Content = styled.div`
    height: calc(100% - var(--header-height));
    width: 100%;
    position: relative;
    display: flex;
`;
