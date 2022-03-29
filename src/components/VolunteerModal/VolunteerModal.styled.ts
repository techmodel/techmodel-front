import { darken } from '@material-ui/core';
import styled from 'styled-components';
import Card from '../primitives/Card';

export const VolunteerModal = styled(Card)`
    overflow: auto;
    padding: 3em 2em;
    border-radius: 1em;
`;

export const ProfilePhoto = styled.div`
    width: 10em;
    height: 10em;
    transition: transform 0.25s;
    border: #dadada 3px solid;
    border-radius: 100em;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 100em;
    }
`;

export const PersonalDetailsContainer = styled.div`
    display: flex;
    align-content: flex-start;
    width: 100%;
    gap: 11em;
    justify-content: space-between;
`;

export const PersonalDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

export const VerticalList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

export const Username = styled.div`
    font-size: 1.5em;
    font-weight: 600;
    margin-bottom: .5em;
    display: flex;
    align-items: center;
`;

export const Header = styled.div`
    font-size: 1.125em;
    font-weight: 600;
    display: flex;
    align-items: center;
    margin-bottom: 0.25em;
`;

export const Occupation = styled.div`
    color: ${p => p.theme.colors.text.secondary};
`;

export const ShortDescription = styled.div`
    word-wrap: break-word;
    width: 22em;
`;


export const AdditionalField = styled.div`
    font-size: 0.875em;
    color: #787878;
    display: flex;
    align-items: center;
    gap: 0.5em;
`;
