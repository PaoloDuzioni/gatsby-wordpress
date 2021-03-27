import React from 'react';
import GlobalStyle from '../../globals/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../../globals/theme';
import Footer from '../Footer';
import Header from '../Header';
import { App, MainContent } from './style';

const Layout = ({ children }) => {
    return (
        <App>
            <ThemeProvider theme={theme}>
                <GlobalStyle />

                <Header />

                <MainContent>{children}</MainContent>

                <Footer />
            </ThemeProvider>
        </App>
    );
};

export default Layout;
