import styled from 'styled-components';


export const FilterTitleRow = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
`;

export const FilterInputRow = styled.div<{isExpanded: boolean}>`
    display: flex;
    align-items: center;
    gap: 1em;

    overflow: hidden;
    max-height: ${p => p.isExpanded ? '2': '0'}em;
    transition: max-height 0.3s;
`;
