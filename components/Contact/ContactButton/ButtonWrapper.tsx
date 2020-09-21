import styled from 'styled-components';

const ButtonWrapper = styled.a<{ height: string; width: string; backgroundColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    :last-of-type {
      margin-right: 0;
    }
  }
`;

export default ButtonWrapper;
