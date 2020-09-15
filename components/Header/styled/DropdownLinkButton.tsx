import styled from 'styled-components';

const DropdownLinkButton = styled.a`
  color ${(props) => props.theme.colors.text};
  font-size:${(props) => props.theme.fontSizes.l};
  text-decoration:none;
  
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    &:hover {
      font-weight:${(props) => props.theme.fontWeights.bold};
    }
    font-size:${(props) => props.theme.fontSizes.m};
  }
`;

export default DropdownLinkButton;
