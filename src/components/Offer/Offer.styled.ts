import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const OfferContainer = styled.div`
    display: flex;
    margin: 1em;
    padding: 1em;
    gap: .325em;
    border-radius: .5em;
    background-color: #e7e7e7;
    flex-direction: column;
    align-items: end;
    font-family: system-ui;
    min-width: 15em;
    flex-grow: 0;
`;


export const Subject = styled.div`
    font-size: 1.125em;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: start;

`;


export const Language = styled.div`
    color: #787878;
    font-size: 0.875em;
    display: flex;
    align-items: center;
    gap: 0.5em;
`;

export const LectureTypeIndicator = styled.div`
    float: right;
`;

export const ProfilePhoto = styled.div`
    display: inline-flex;
    border-radius: 100px;
    height: 2em;
    width: 2em;
    white-space: nowrap;
    align-items: center;
    img {
        width: 100%;
        height: 100%;
        border-radius: 100em;
        object-fit: cover;
    }
`;

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
`;

