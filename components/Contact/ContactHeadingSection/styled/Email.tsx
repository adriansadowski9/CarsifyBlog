import styled from 'styled-components';

const Email = styled.a`
  color: ${(props) => props.theme.colors.text};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.xs};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.shareSection};
  }
`;

export default Email;
