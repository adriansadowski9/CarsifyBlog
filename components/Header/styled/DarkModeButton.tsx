import styled from 'styled-components';

const DarkModeButton = styled.button`
  width: 70px;
  height: 70px;
  background: ${(props) => props.theme.colors.themeButtonBg};
  border: none;
  margin: 0;
  cursor: pointer;

  svg {
    width: 23px;
    height: 23px;
  }

  &:focus {
    outline: none;
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    svg {
      width: 32px;
      height: 32px;
    }
  }
`;

export default DarkModeButton;
