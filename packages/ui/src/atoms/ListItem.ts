import styled from 'styled-components';

interface ListItemProps {
  hasTextCentered?: boolean;
  onClick?(): void;
}

export const ListItem = styled.li<ListItemProps>`
  position: relative;
  width: calc(100% / 3);
  overflow: hidden;
  ${({ hasTextCentered }) => hasTextCentered && 'text-align: center;'}
  ${({ onClick }) => onClick && 'cursor: pointer;'}
`;
