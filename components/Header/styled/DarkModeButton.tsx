import styled from 'styled-components';

const DarkModeButton = styled.button`
  display: ${(props) => (props.isSearchOpened ? 'none' : 'block')};
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
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    display: block;
  }
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export default DarkModeButton;
