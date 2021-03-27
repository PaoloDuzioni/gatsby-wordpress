const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    /**
     * GET SITE PAGES
     */

    // 1. get all WP pages
    const pages = await graphql(`
        query {
            allWpPage {
                nodes {
                    id
                    uri
                }
            }
        }
    `);

    // 2. specify the template to use for the posts
    const pageTemplate = path.resolve(`./src/templates/page.js`);

    // 3. Create a page for each site page
    pages.data.allWpPage.nodes.map(page => {
        actions.createPage({
            // url for the page
            path: page.uri,
            // component to use for post template
            component: pageTemplate,
            // data to send on query
            context: {
                id: page.id,
            },
        });
    });

    /**
     * GET BLOG POSTS
     */

    // 1. get all WP posts
    const posts = await graphql(`
        query {
            allWpPost {
                nodes {
                    id
                    uri
                }
            }
        }
    `);

    // 2. specify the template to use for the posts
    const postTemplate = path.resolve(`./src/templates/post.js`);

    // 3. Create a page for each post
    posts.data.allWpPost.nodes.map(post => {
        actions.createPage({
            // url for the page
            path: post.uri,
            // component to use for post template
            component: postTemplate,
            // data to send on query
            context: {
                id: post.id,
            },
        });
    });
};
