import React from 'react';
import { graphql } from 'gatsby';
import { MainTitle } from '../components/Typography';

const Page = ({ data }) => {
    const { page } = data;
    console.log('Title', page.title);
    return (
        <>
            <MainTitle>{page.title}</MainTitle>
            <div dangerouslySetInnerHTML={{ __html: page.content }}></div>
        </>
    );
};

export const query = graphql`
    query PagePostById(
        # these variables are passed in via createPage.pageContext in gatsby-node.js
        $id: String!
    ) {
        # selecting the current post by id
        page: wpPage(id: { eq: $id }) {
            id
            title
            content
        }
    }
`;

export default Page;
