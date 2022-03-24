import styled from 'styled-components';

export const VolunteerCard = styled.div`
    display: flex;
    margin: 1em;
    padding: 2em .5em;
    padding-top: 1em;
    gap: .325em;
    border-radius: .5em;
    background-color: #e7e7e7;
    flex-direction: column;
    align-items: center;
    font-family: system-ui;
    min-width: 10em;
    flex-grow: 0;
`;

export const ProfilePhoto = styled.div`
    border: #dadada 3px solid;
    border-radius: 100em;
    height: 5em;
    width: 5em;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 100em;
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
`;

export const AdditionalField = styled.div`
    font-size: 0.875em;
    color: #787878;
    display: flex;
    align-items: center;
`;
