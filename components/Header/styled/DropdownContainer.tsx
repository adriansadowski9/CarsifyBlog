import styled from 'styled-components';

const DropdownContainer = styled.ul<{ isOpen: boolean }>`
  position: fixed;
  top: 80px;
  bottom: 0;
  right: ${(props) => (props.isOpen ? '0%' : '-100%')};
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.bg};
  transition: opacity 0.5s;
  transition: ${(props) =>
    props.isOpen
      ? 'right 0.4s cubic-bezier(0.33, 0.66, 0.75, 0.75)'
      : 'right 0.4s cubic-bezier(0.80, 0.25, 0.75, 0.75)'};

  z-index: 155;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    opacity: 0;
    visibility: hidden;
    padding: ${(props) => props.theme.spaces.xxs} 0;
    height: auto;
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 100%;
    align-items: flex-start;
  }
`;

export default DropdownContainer;
