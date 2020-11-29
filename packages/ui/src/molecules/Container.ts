import styled from 'styled-components';

interface ContainerProps {
  fullWidth?: boolean;
}

const Container = styled.div<ContainerProps>`
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
`;

export default Container;
