import styled from 'styled-components';

const Hamburger = styled.div<{ isMenuOpened: boolean }>`
  position: relative;
  align-self: center;
  width: 36px;
  height: 3px;
  background: ${(props) => props.theme.colors.hamburger};
  visibility: ${(props) => (props.isMenuOpened ? 'hidden' : 'visible')};
  transition: visibility 0s ease-in 0.3s;

  ::before {
    content: '';
    width: 66%;
    height: 3px;
    background: ${(props) => props.theme.colors.hamburger};
    position: absolute;
    visibility: visible;
    top: ${(props) => (props.isMenuOpened ? '0' : '-10px')};
    left: ${(props) => (props.isMenuOpened ? '6px' : 0)};
    transform: rotate(${(props) => (props.isMenuOpened ? '-45deg' : '0deg')});
    transition: ${(props) =>
      props.isMenuOpened
        ? 'top .2s ease-in, left .1s ease-in .2s, transform .2s ease-in .3s'
        : 'transform .2s ease-out, left .1s ease-out .2s, top .2s ease-out .3s'};
  }
  ::after {
    content: '';
    width: 66%;
    height: 3px;
    background: ${(props) => props.theme.colors.hamburger};
    position: absolute;
    visibility: visible;
    bottom: ${(props) => (props.isMenuOpened ? '0' : '-10px')};
    right: ${(props) => (props.isMenuOpened ? '6px' : 0)};
    transform: rotate(${(props) => (props.isMenuOpened ? '45deg' : '0deg')});
    transition: ${(props) =>
      props.isMenuOpened
        ? 'bottom .2s ease-in, right .1s ease-in .2s, transform .2s ease-in .3s'
        : 'transform .2s ease-out, right .1s ease-out .2s, bottom .2s ease-out .3s'};
  }
`;

export default Hamburger;
