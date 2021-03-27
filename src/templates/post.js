import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { MainTitle } from '../components/Typography';

const Post = ({ data }) => {
    const { post } = data;
    return (
        <>
            <MainTitle noMargin>{post.title}</MainTitle>
            <time>{post.date}</time>
            {post.featuredImage && (
                <figure>
                    <GatsbyImage
                        image={
                            post.featuredImage.node.localFile.childImageSharp
                                .gatsbyImageData
                        }
                        alt={post.featuredImage.node.altText}
                    />
                </figure>
            )}
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
            <Link to="/">Read more</Link>
        </>
    );
};

export const pageQuery = graphql`
    query BlogPostById(
        # these variables are passed in via createPage.pageContext in gatsby-node.js
        $id: String!
    ) {
        # selecting the current post by id
        post: wpPost(id: { eq: $id }) {
            id
            excerpt
            content
            title
            date(formatString: "DD MMMM YYYY")
            featuredImage {
                node {
                    altText
                    localFile {
                        childImageSharp {
                            gatsbyImageData(layout: CONSTRAINED)
                        }
                    }
                }
            }
        }
    }
`;

export default Post;
