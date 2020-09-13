import styled from 'styled-components';

const DropdownContainer = styled.ul`
  opacity: 0;
  visibility: hidden;
  list-style: none;
  height: 0;
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.bg};
  transition: all 0.5s;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    padding: ${(props) => props.theme.spaces.xxs} 0;
    height: auto;
    box-shadow: 0px 3px 2px #00000029;
    position: absolute;
    top: 100%;
    align-items: flex-start;
  }
`;

export default DropdownContainer;
