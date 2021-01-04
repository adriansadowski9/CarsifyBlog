import styled from 'styled-components';

const IconsContainer = styled.div<{ isIconsVisible: boolean; isSubMenuOpened: boolean }>`
  display: flex;
  align-self: flex-end;
  z-index: 9999;
  visibility: ${(props) => (props.isSubMenuOpened ? 'hidden' : 'visible')};
  opacity: ${(props) => (props.isSubMenuOpened ? '0' : '1')};
  transition: all 0.3s;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    visibility: ${(props) => (props.isIconsVisible ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.isIconsVisible ? '1' : '0')};
    position: absolute;
    right: 97px;
    top: 70px;
  }
`;

export default IconsContainer;
