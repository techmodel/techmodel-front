import { Height } from '@material-ui/icons';
import styled from 'styled-components';
import Card from '../primitives/Card';

export const FilterBarContainer = styled(Card)`
    display: flex;
    flex-direction: column;
    gap: 0.25em;
    overflow-y: auto;
    overflow-x: hidden;
    width: 13em;
    flex-shrink: 0;
    margin: 5em 1em;
    margin-top: 3em;
`;

export const FilterBarTitle = styled.div`
    font-size: ${p => p.theme.font.size.title};
    font-weight: 600;
    display: flex;
    align-items: center;
`;

export const FilterBarRowsContainer = styled.div`
    display: flex;
    gap: 0.25em;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
`;
