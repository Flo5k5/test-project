import styled from 'styled-components';
import { Theme } from '../types/Theme';

interface OverlayCardProps {
  isVisible?: boolean;
  theme: Theme;
}

export const CardOverlay = styled.div<OverlayCardProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-weight: bold;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
  ${({ theme }) => theme.background && `background-color: ${theme.background}bf;`}
  ${({ isVisible }) => (isVisible ? `visibility: visible;` : `visibility: hidden;`)}
`;
