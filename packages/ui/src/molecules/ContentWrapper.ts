import styled from 'styled-components';
import { minWidthDevice } from '../theme/devices';

interface ContentWrapperProps {
  fullWidth?: boolean;
}

const ContentWrapper = styled.div<ContentWrapperProps>`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  padding: 0 10px;
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}

  @media ${minWidthDevice.tablet} {
    max-width: 700px;
  }

  @media ${minWidthDevice.laptop} {
    max-width: 800px;
  }

  @media ${minWidthDevice.desktop} {
    max-width: 1400px;
  }
`;

export default ContentWrapper;
