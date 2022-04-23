import styled from 'styled-components';
import Box from '../../../primitives/Box';
import { darken } from '@mui/material';

export const UserType = styled(Box)`
  display: flex;
  padding: 2em 0.5em;
  padding-top: 1em;
  gap: 0.325em;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 10em;
  flex-grow: 0;
  cursor: pointer;

  transition: background-color 0.2s;

  :hover {
    background-color: ${(p) => darken(p.theme.box.bg, 0.05)};
  }
`;

export const UserTypePhoto = styled.div`
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
