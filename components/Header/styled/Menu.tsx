import styled from 'styled-components';

import DarkModeButton from '@components/Header/styled/DarkModeButton';

const Menu = styled.div<{ isOpen }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background: ${(props) => props.theme.colors.bg};
  display: flex;
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;

  ${DarkModeButton} {
    position: absolute;
    right: ${(props) => props.theme.spaces.l};
    bottom: ${(props) => props.theme.spaces.l};
  }
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    position: static;
    visibility: visible;
    opacity: 1;
    width: auto;
    height: 90px;
    flex-direction: row;
    ${DarkModeButton} {
      position: static;
    }
  }
`;

export default Menu;
