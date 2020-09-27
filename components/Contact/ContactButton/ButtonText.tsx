import styled from 'styled-components';

const ButtonText = styled.span`
  color: ${(props) => props.theme.colors.socialBoxBg};
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSizes.l};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export default ButtonText;
