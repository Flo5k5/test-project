import styled from 'styled-components';

interface InputProps {
  fullWidth?: boolean;
}

const Input = styled.input<InputProps>`
  box-sizing: border-box;
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}

  &:focus {
    outline: none;
  }
`;

export default Input;
