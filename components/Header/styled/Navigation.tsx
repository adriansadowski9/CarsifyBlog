import styled from 'styled-components';

const Navigation = styled.nav`
  width: 100%;
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
