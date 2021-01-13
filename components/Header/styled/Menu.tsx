import styled from 'styled-components';

const Menu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  padding-top: 70px;

  right: ${(props) => (props.isOpen ? '0%' : '-100%')};
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  transition: ${(props) =>
    props.isOpen
      ? 'right 0.4s cubic-bezier(0.33, 0.66, 0.75, 0.75)'
      : 'right 0.4s cubic-bezier(0.80, 0.25, 0.75, 0.75)'};

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    overflow: hidden;
    padding: 0;
    position: static;
    visibility: visible;
    opacity: 1;
    height: 70px;
    flex-direction: row;
    background: none;
    z-index: ${(props) => (props.isSearchOpened ? '1' : '100')};
    width: ${(props) => (props.isSearchOpened ? '0' : 'auto')};
  }
`;

export default Menu;
