import styled from 'styled-components';

const ChevronWrapper = styled.button<{ isOpen?: boolean }>`
  position: absolute;
  right: ${(props) => props.theme.spaces.xs};
  transition: transform 0.5s;
  transform: ${(props) => (props.isOpen ? 'rotate(90deg)' : 'rotate(270deg)')};
  border: none;
  background: transparent;
  outline: 0;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    display: none;
    visibility: hidden;
  }
`;

export default ChevronWrapper;
