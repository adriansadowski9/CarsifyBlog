import styled from 'styled-components';

const LogoWrapper = styled.a<{ isSearchOpened: boolean }>`
  display: ${(props) => (props.isSearchOpened ? 'none' : 'flex')};
  align-items: center;
  text-decoration: none;
  z-index: 150;
  height: 100%;
  margin-left: ${(props) => props.theme.spaces.s};

  &:hover {
    cursor: pointer;
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    display: flex;
    margin-left: ${(props) => props.theme.spaces.xxs};
  }
`;

export default LogoWrapper;
