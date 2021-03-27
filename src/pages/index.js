import * as React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import { MainTitle } from '../components/Typography';

const IndexPage = ({ data }) => {
    const { allWpPost } = data;
    return (
        <>
            <MainTitle>Homepage</MainTitle>

            <section>
                <h2>Latest Posts</h2>
                {allWpPost.nodes.map(post => (
                    <article key={post.id}>
                        <h3>{post.title}</h3>
                        <div
                            dangerouslySetInnerHTML={{ __html: post.excerpt }}
                        ></div>
                        <Link to={post.uri}>Read more</Link>
                    </article>
                ))}
            </section>
        </>
    );
};

export const query = graphql`
    query {
        allWpPost {
            nodes {
                id
                title
                excerpt
                uri
            }
        }
    }
`;

export default IndexPage;
