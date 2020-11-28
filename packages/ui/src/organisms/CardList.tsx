import React, { FC } from 'react';
import { List } from '../atoms';
import { Card } from '../molecules/Card';

export interface CardListItem {
  id: number;
  title: string;
  imageSource: string;
}

interface CardListProps {
  items: Array<CardListItem>;
  onCardClick?(id?: number): void;
}

export const CardList: FC<CardListProps> = ({ items, onCardClick }) => {
  return (
    <List columns={5}>
      {items.map(({ id, imageSource, title }) => (
        <Card key={id} id={id} imageSource={imageSource} title={title} onClick={onCardClick} />
      ))}
    </List>
  );
};
