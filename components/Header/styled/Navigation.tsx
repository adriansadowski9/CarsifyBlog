import styled from 'styled-components';

const Navigation = styled.nav`
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${(props) => props.theme.spaces.l};
  background: ${(props) => props.theme.colors.bg};
  z-index: 150;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    padding: 0 ${(props) => props.theme.spaces.xxxl};
  }
`;

export default Navigation;
