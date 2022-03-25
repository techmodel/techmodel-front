import styled from 'styled-components';
import Card from '../primitives/Card';

export const FilterBarContainer = styled(Card)`
    display: flex;
    flex-direction: column;
    gap: 0.25em;
    overflow-y: auto;
    overflow-x: hidden;
    width: 11em;
    flex-shrink: 0;
`;

export const FilterBarTitle = styled.div`
    font-size: ${p => p.theme.font.size.header};
    display: flex;
    align-items: center;
`;
