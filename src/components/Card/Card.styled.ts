import styled from 'styled-components';

const Card = styled.div`
    margin: ${p => p.theme.layout.margin};
    padding: ${p => p.theme.layout.padding};
    background-color: ${p => p.theme.card.bg};
    border-radius: ${p => p.theme.card.borderRadius};
    box-shadow: ${p => p.theme.card.boxShadow};
`;

export default Card;
