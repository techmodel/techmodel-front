import styled from 'styled-components';

export const ItemListContainer = styled.div`
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    direction: rtl;
`;

export const ItemListContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    align-content: flex-start;
    gap: 0em;
    overflow-y: auto;
    overflow-x: hidden;
    margin: 2em 0;
    direction: ltr;
`;


//display: grid;
//grid-template-columns: repeat(auto-fill,minmax(160px, 1fr));