import styled from 'styled-components';

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    display: flex;
    margin-bottom: 0;
    overflow-y: hidden;
  }
`;

export default NavList;
