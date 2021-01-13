import styled from 'styled-components';

const LogoText = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.l};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin: ${(props) => props.theme.spaces.xs} 0 0 0;
  transform: rotate(-8deg);

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    font-size: ${(props) => props.theme.fontSizes.xl};
  }
`;

export default LogoText;
