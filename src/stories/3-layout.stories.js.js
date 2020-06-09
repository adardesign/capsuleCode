import React from 'react';
import { action } from '@storybook/addon-actions';
import Layout from '../components/template/layout';

export default {
  title: 'Layout',
  component: Layout,
};


export const TheLayout = () => (
  <Layout onClick={action('clicked')} header={{name:"storybook layout example"}}>
      this is the layout content
  </Layout>
);
