import styled from 'styled-components';

export default styled.div`
    margin: ${p => p.theme.layout.margin};
    padding: ${p => p.theme.layout.padding};
    background-color: ${p => p.theme.box.bg};
    border-radius: ${p => p.theme.box.borderRadius};
`;
