import styled from 'styled-components';

const IconsContainer = styled.div<{ isIconsVisible: boolean }>`
  display: flex;
  align-self: flex-end;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    transition: all 0.3s;
    visibility: ${(props) => (props.isIconsVisible ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.isIconsVisible ? '1' : '0')};
    position: absolute;
    right: 97px;
    top: 70px;
  }
`;

export default IconsContainer;
