import styled from 'styled-components';

const IconInfoLink = styled.a`
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${(props) => props.theme.colors.iconInfoText};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.linkHover};
  }
`;

export default IconInfoLink;
