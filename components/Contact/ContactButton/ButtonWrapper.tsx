import styled from 'styled-components';

const ButtonWrapper = styled.button<{
  customHeight?: string;
  customWidth?: string;
  backgroundColor?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  ${(props) => props.customWidth && `width: ${props.customWidth};`}
  ${(props) => props.customHeight && `height: ${props.customHeight};`}
  background-color: ${(props) => props.backgroundColor};
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  svg {
    margin-right: ${(props) => props.theme.spaces.xxs};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    :last-of-type {
      margin-right: 0;
    }
  }
`;

export default ButtonWrapper;
