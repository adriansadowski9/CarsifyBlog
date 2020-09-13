import styled from 'styled-components';

const LinkButton = styled.a`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.l};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  text-decoration: none;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    height: 90px;
    line-height: 90px;
    padding: 0 ${(props) => props.theme.spaces.m};
    cursor: pointer;
  }
`;

export default LinkButton;
