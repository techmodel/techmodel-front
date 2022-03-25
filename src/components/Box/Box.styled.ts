import styled from 'styled-components';

const Box = styled.div`
    margin: ${p => p.theme.layout.margin};
    padding: ${p => p.theme.layout.padding};
    background-color: ${p => p.theme.box.bg};
    border-radius: ${p => p.theme.box.borderRadius};
`;

export default Box;
