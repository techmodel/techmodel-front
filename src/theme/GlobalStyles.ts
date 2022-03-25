import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text.primary};
    font-family: ${({ theme }) => theme.font.family.main};
    transition: all 0.50s linear;
  }

  a {
    color: ${({ theme }) => theme.colors.link};
    cursor: pointer;
  }

  button {
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: ${({ theme }) => theme.button.borderRadius};
    margin-top: 5px;
    cursor: pointer;
  }

  button.btn {
    background-color: ${({ theme }) => theme.button.bg.primary};
    color: ${({ theme }) => theme.button.text.primary};
  }
`;
