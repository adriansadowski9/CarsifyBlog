import styled from 'styled-components';

const DropdownContainer = styled.ul<{ isOpen: boolean }>`
  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    overflow: hidden;
  }
`;

export default DropdownContainer;
