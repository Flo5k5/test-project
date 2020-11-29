import React, { FC } from 'react';
import styled from 'styled-components';
import { Theme } from '../types/Theme';
import MaterialIcon from './MaterialIcon';

interface ContainerProps {
  theme: Theme;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.onPrimary};
  align-items: center;
  justify-content: center;
`;

const BrokenImage: FC = () => {
  return (
    <Container>
      <MaterialIcon name='broken_image' />
    </Container>
  );
};

export default BrokenImage;
