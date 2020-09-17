import styled from 'styled-components';

const ShareSectionBoldedText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.m};
  color: ${(props) => props.theme.colors.shareSection};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin: 0;
`;

export default ShareSectionBoldedText;
