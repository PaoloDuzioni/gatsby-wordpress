import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
    padding: 1rem;
    background: ${props => props.theme.colors.primary};
`;

export const Brand = styled.div`
    a {
        font-size: 1.5em;
        text-decoration: none;
        color: ${props => props.theme.colors.white};
    }
`;

export const Navigation = styled.nav`
    ul {
        display: flex;
        list-style: none;
    }
    li {
    }
    a {
        display: inline-block;
        padding: 0.5rem 1rem;
        text-decoration: none;
        color: ${props => props.theme.colors.white};
    }
`;
