import styled from 'styled-components';

const LogoIconWrapper = styled.div`
  width: 52px;
  margin-left: -${(props) => props.theme.spaces.s};
  z-index: 150;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    width: 64px;
    margin-left: -${(props) => props.theme.spaces.m};
  }
`;

export default LogoIconWrapper;
