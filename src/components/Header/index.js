import * as React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Brand, Navigation, StyledHeader } from './style';

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
            allWpMenu {
                nodes {
                    menuItems {
                        nodes {
                            id
                            label
                            url
                        }
                    }
                }
            }
        }
    `);

    const menu = data.allWpMenu.nodes[0].menuItems.nodes;

    return (
        <StyledHeader>
            <Brand>
                <Link to="/">{data.site.siteMetadata.title}</Link>
            </Brand>

            <Navigation>
                <ul>
                    {menu.map(link => (
                        <li key={link.id}>
                            <Link to={link.url}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </Navigation>
        </StyledHeader>
    );
};

export default Header;
