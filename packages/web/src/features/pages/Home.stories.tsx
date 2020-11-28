import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Home from './Home';

export default {
  title: 'Movies/pages/Home',
  component: Home,
} as Meta;

export const Simple: React.FC = () => <Home />;
