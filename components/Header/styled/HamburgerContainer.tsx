import styled from 'styled-components';

const HamburgerContainer = styled.div<{ isSearchOpened: boolean }>`
  display: ${(props) => (props.isSearchOpened ? 'none' : 'flex')};
  align-self: center;
  width: 46px;
  height: 33px;
  padding: 5px;
  cursor: pointer;
  margin-right: ${(props) => props.theme.spaces.xs};
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    display: flex;
  }
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    display: none;
  }
`;

export default HamburgerContainer;
