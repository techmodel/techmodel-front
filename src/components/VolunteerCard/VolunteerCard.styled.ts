import { darken } from '@material-ui/core';
import styled from 'styled-components';
import Box from '../primitives/Box';

export const VolunteerCard = styled(Box)`
    display: flex;
    padding: 2em .5em;
    padding-top: 1em;
    gap: .325em;
    flex-direction: column;
    align-items: center;
    min-width: 10em;
    flex-grow: 0;
    cursor: pointer;

    transition: background-color 0.2s;

    :hover {
        background-color: ${p => darken(p.theme.box.bg, 0.05)};
    }
`;

export const ProfilePhoto = styled.div`
    border: #dadada 3px solid;
    border-radius: 100em;
    height: 5em;
    width: 5em;

    transition: transform 0.25s;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 100em;
    }
    :hover {
        transform: scale(1.45) translateY(-0.5em);
    }
`;

export const Username = styled.div`
    font-size: 1.25em;
    font-weight: 600;
    margin-bottom: .75em;
`;

export const Occupation = styled.div`
    color: #787878;
    text-align: center;
    unicode-bidi: plaintext;
`;

export const AdditionalField = styled.div`
    font-size: 0.875em;
    color: #787878;
    display: flex;
    align-items: center;
`;
