import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        background: ${props => props.theme.colors.backCol};
    }
`;

export default GlobalStyle;
