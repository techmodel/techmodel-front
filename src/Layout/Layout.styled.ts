import styled from 'styled-components';

export const LayoutContainer = styled.div`
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: row;
    align-items: stretch;
`;

export const SystemIconColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 3em;
    flex-shrink: 0;
`;

export const ViewContainer = styled.div`
    flex-grow: 1;
    display: flex;
`;

export const SidebarMock = styled.div`
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 14em;
    background-color: #dee2e3;
`;
