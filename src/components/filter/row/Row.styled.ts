import { TextField as MUITextField } from '@mui/material'
import styled, { css } from 'styled-components';

export const FilterTitleRow = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25em;
    font-weight: 600;
`;

export const FilterInputRow  = styled.div<{isEnabled: boolean}>`
    ${p => !p.isEnabled && css`
        opacity: 0.5;
    `}
`;

export const StringFilterInputRow = styled(FilterInputRow)`
    display: flex;
    align-items: center;
    gap: 1em;
    transition: max-height 0.3s;
    background-color: ${p => p.theme.box.bg};
    color: ${p => p.theme.colors.text.secondary};
    padding: 0.325em;
    border-radius: 0.3em;
    input {
        outline: none;
        border-style: none;
        background-color: transparent;
    }
`;

export const MultiSelectFilterRow = styled(FilterInputRow)`
    .MuiChip-root {
        direction: ltr;
    }
    .MuiAutocomplete-endAdornment {
        direction: ltr;
    }
`;

export const TextField = styled(MUITextField)`
    direction: ltr;
`;
