import styled from 'styled-components';

import DarkModeButton from '@components/Header/styled/DarkModeButton';

const Menu = styled.div<{ isOpen: boolean; isTipsOpen: boolean }>`
  position: fixed;
  top: ${(props) => (props.isTipsOpen ? '30px' : '0')};
  right: ${(props) => (props.isOpen ? '0%' : '-100%')};
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.bg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  transition: ${(props) =>
    props.isOpen
      ? 'right 0.4s cubic-bezier(0.33, 0.66, 0.75, 0.75)'
      : 'right 0.4s cubic-bezier(0.80, 0.25, 0.75, 0.75)'};

  ${DarkModeButton} {
    position: absolute;
    right: ${(props) => props.theme.spaces.l};
    bottom: ${(props) => props.theme.spaces.l};
  }
  @media only screen and (min-width: 375px) {
    top: 0;
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
