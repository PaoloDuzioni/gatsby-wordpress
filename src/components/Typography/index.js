import styled from 'styled-components';

export const MainTitle = styled.h1`
    margin-bottom: ${props => (props.noMargin ? '0' : '3rem')};
`;
