import React from 'react';
import Layout from './src/components/Layout';

/**
 * Wrap all pages with a Layout component.
 */
export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
};
