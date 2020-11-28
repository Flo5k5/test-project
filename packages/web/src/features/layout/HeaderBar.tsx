import React, { FC } from 'react';
import { DarkModeToggleButton, Header, MaterialIcon, Title2 } from '@test-project/ui';
import { Link, useLocation } from 'react-router-dom';

interface HeaderBarProps {
  title?: string;
}

/**
 * Displays header with navigation elements.
 */
const HeaderBar: FC<HeaderBarProps> = ({ title }) => {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  return (
    <Header>
      <div>
        {!isHomePage && (
          <Link to='/'>
            <MaterialIcon name='home' />
          </Link>
        )}
      </div>
      {title && <Title2>{title}</Title2>}
      <DarkModeToggleButton />
    </Header>
  );
};

export default HeaderBar;
