import styled from 'styled-components';

const DropdownWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 70px;
  bottom: 0;
  right: ${(props) => (props.isOpen ? '0' : '-100%')};
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.5s;
  transition: ${(props) =>
    props.isOpen
      ? 'right 0.4s cubic-bezier(0.33, 0.66, 0.75, 0.75)'
      : 'right 0.4s cubic-bezier(0.80, 0.25, 0.75, 0.75)'};

  z-index: 10000;
  background-color: ${(props) => props.theme.colors.bg};
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    width: 350px;
    position: absolute;
    right: auto;
    left: 0;
    bottom: auto;
    padding: ${(props) => props.theme.spaces.xxs} 0;
    height: auto;
    align-items: flex-start;
  }
`;
export default DropdownWrapper;
