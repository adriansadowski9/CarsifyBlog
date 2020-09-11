import styled from 'styled-components';

const HamburgerContainer = styled.div`
  display: flex;
  align-self: center;
  width: 46px;
  height: 33px;
  padding: 5px;
  cursor: pointer;
  z-index: 1000;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    display: none;
  }
`;

export default HamburgerContainer;
