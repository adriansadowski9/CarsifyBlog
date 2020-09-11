import styled from 'styled-components';

const IconInfoText = styled.p<{ color: string }>`
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${(props) => props.theme.colors.iconInfoText};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  text-transform: uppercase;
`;

export default IconInfoText;
