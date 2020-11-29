import React, { FC } from 'react';

interface MaterialIconProps {
  name: string;
  size?: 'tiny' | 'small' | 'medium' | 'large';
  onClick?(): void;
}

/**
 * Displays Material Icons.
 * To use this component, you have to load this webfont:
 * https://fonts.googleapis.com/icon?family=Material+Icons
 */
const MaterialIcon: FC<MaterialIconProps> = ({ name, size = '', onClick }) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <i className={`material-icons ${size}`} role={onClick && `button`} onClick={onClick}>
      {name}
    </i>
  );
};

export default MaterialIcon;
