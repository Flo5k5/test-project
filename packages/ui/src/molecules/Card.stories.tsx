import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Card from './Card';

export default {
  title: 'ui/Atoms/Card',
  component: Card,
} as Meta;

export const Simple: React.FC = () => <Card id={1} title='Coucou' imageSource='coucou' />;
