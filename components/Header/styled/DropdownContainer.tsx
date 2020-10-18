import styled from 'styled-components';

const DropdownContainer = styled.ul<{ isOpen: boolean }>`
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  height: ${(props) => (props.isOpen ? 'auto' : '0')};
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.bg};
  transition: opacity 0.5s;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    opacity: 0;
    visible: hidden;
    padding: ${(props) => props.theme.spaces.xxs} 0;
    height: auto;
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 100%;
    align-items: flex-start;
  }
`;

export default DropdownContainer;
