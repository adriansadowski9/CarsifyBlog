import styled from 'styled-components';

const DropdownContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    transition: all 0.5s;
    opacity: 0;
    visibility: hidden;
    background-color: ${(props) => props.theme.colors.bg};
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);
    height: auto;
    width: 350px;
    top: 90px;
    position: fixed;
    overflow: hidden;
  }
`;

export default DropdownContainer;
