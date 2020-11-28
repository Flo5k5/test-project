import styled from 'styled-components';

interface ImageProps {
  fullWidth?: boolean;
  fullHeight?: boolean;
}

const Image = styled.img<ImageProps>`
  ${({ fullWidth }) => fullWidth && `width: 100%;`}
  ${({ fullHeight }) => fullHeight && `height: 100%;`}
`;

export { Image };
