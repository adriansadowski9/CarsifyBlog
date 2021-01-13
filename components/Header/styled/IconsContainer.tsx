import styled from 'styled-components';

const IconsContainer = styled.div<{ isIconsVisible: boolean }>`
  display: flex;
  align-self: flex-end;
  z-index: 9999;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    visibility: ${(props) => (props.isIconsVisible ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.isIconsVisible ? '1' : '0')};
    position: absolute;
    right: 97px;
    top: 70px;
    transition: all 0.3s;
  }
`;

export default IconsContainer;
