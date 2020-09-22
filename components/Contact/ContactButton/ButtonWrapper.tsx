import styled from 'styled-components';

const ButtonWrapper = styled.button<{ height?: string; width?: string; backgroundColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  ${(props) => props.width && `width: ${props.width};`}
  ${(props) => props.height && `height: ${props.height};`}
  background-color: ${(props) =>
    props.backgroundColor};
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
