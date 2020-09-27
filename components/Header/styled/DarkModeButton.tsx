import styled from 'styled-components';

const DarkModeButton = styled.button`
  background: none;
  border: none;
  padding: ${(props) => props.theme.spaces.xxxs};
  margin: 0;
  cursor: pointer;

  svg {
    width: 32px;
  }

  &:focus {
    outline: none;
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    margin-left: ${(props) => props.theme.spaces.xxl};
  }
`;

export default DarkModeButton;
