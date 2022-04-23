import styled from 'styled-components';

export const SignUpDetailsForm = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  width: 20em;
  border: 5px solid pink;
  justify-content: center;

  autocomplete {
    display: flex;
    alignitems: center;
    justify: center;
    direction: column;
    width: 400;
    text-align: left;
  }

  button {
    color: primary;
  }
`;
