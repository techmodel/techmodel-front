import styled, { css } from 'styled-components';


export const FilterTitleRow = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25em;
    font-weight: 600;
`;

export const FilterInputRow = styled.div<{isEnabled: boolean}>`
    display: flex;
    align-items: center;
    gap: 1em;
    transition: max-height 0.3s;

    background-color: ${p => p.theme.box.bg};
    color: ${p => p.theme.colors.text.secondary};
    padding: 0.325em;
    border-radius: 0.3em;

    ${p => !p.isEnabled && css`
        opacity: 0.5;
    `}
    input {
        outline: none;
        border-style: none;
        background-color: transparent;
    }
`;
