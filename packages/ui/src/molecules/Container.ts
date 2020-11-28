import styled from 'styled-components';

interface ContainerProps {
  fullWidth?: boolean;
}

export const Container = styled.div<ContainerProps>`
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
`;
