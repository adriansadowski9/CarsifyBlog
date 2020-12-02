import styled from 'styled-components';

const Navigation = styled.nav<{ scrollStyles: boolean }>`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  z-index: 150;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    height: 90px;
  }
`;

export default Navigation;
