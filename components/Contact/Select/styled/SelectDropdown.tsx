import styled from 'styled-components';

const SelectDropdown = styled.ul<{ isOpen: boolean }>`
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  border: none;
  background-color: ${(props) => props.theme.colors.bg};
  flex-direction: column;
  list-style-type: none;
  position: absolute;
  top: 100%;
  width: 100%;
  align-items: flex-start;
  margin: 0;
  margin-top: ${(props) => props.theme.spaces.xxs};
  padding: 0;
  z-index: 2;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);
  transition: opacity 0.3s;
`;

export default SelectDropdown;
