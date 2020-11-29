import styled from 'styled-components';

interface TileProps {
  width: string;
}

const Tile = styled.button<TileProps>`
  background: #fff;
  border: 1px solid #999;
  font-size: 3em;
  font-weight: bold;
  width: ${({ width }) => width || 'auto'};
  height: 176px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
`;

export default Tile;
