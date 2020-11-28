import React, { FC, useContext } from 'react';
import { MaterialIcon } from '../atoms/MaterialIcon';
import { ThemeModeContext } from '../theme/ThemeModeContext';
import { ToggleButton } from './ToggleButton';
import { InlineFlex } from '../atoms/InlineFlex';

export const DarkModeToggleButton: FC = () => {
  const { themeMode, toggleMode } = useContext(ThemeModeContext);

  return (
    <InlineFlex>
      <MaterialIcon name='wb_sunny' />
      <ToggleButton isChecked={themeMode === 'dark'} onChange={toggleMode} />
      <MaterialIcon name='brightness_3' />
    </InlineFlex>
  );
};
