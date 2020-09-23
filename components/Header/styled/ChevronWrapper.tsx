import styled from 'styled-components';

const ChevronWrapper = styled.button<{ isOpen: boolean }>`
  position: absolute;
  left: ${(props) => props.theme.spaces.l};
  transition: transform 0.5s;
  transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'none')};
  border: none;
  background: transparent;
  outline: 0;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    display: none;
    visibility: hidden;
  }
`;

export default ChevronWrapper;
