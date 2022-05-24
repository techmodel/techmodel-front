import styled from 'styled-components';
import { Card } from 'components/primitives/Card';

export const FilterBarContainer = styled(Card)`
    display: flex;
    flex-direction: column;
    gap: 0.25em;
    flex-shrink: 0;
    overflow-y: auto;
    overflow-x: hidden;
    height: 90%;
    width: 85%;
`;

export const FilterBarRowsContainer = styled.div`
    display: flex;
    gap: 0.25em;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    width: 90%;
`;

export const FilterBarTitle = styled.div`
    font-size: ${(p) => p.theme.font.size.title};
    font-weight: 600;
    display: flex;
    align-items: center;
`;
