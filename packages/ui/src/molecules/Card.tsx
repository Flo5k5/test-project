import React, { FC, useState } from 'react';
import BrokenImage from '../atoms/BrokenImage';
import Image from '../atoms/Image';
import ListItem from '../atoms/ListItem';
import CardOverlay from '../atoms/CardOverlay';

interface CardProps {
  /** Id of the item displayed. */
  id: number;
  /** Title displayed on the card. */
  title: string;
  /** Source URL of the image. */
  imageSource: string;
  /** Action executed on the click on the card. */
  onClick?(id?: number): void;
}

/** Displays informations about a movie. */
const Card: FC<CardProps> = ({ id, imageSource, title, onClick }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isImageBroken, setIsImageBroken] = useState(false);

  const onItemClick = (itemId?: number) => {
    if (onClick) {
      onClick(itemId);
    }
  };

  const onImageError = () => {
    setIsImageBroken(true);
  };

  return (
    <ListItem
      onClick={() => onItemClick(id)}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}>
      {!isImageBroken && (
        <Image alt={title} fullWidth src={imageSource} loading='lazy' onError={onImageError} />
      )}
      {isImageBroken && <BrokenImage />}
      <CardOverlay isVisible={isMouseOver}>
        <p>{title}</p>
      </CardOverlay>
    </ListItem>
  );
};

export default Card;
