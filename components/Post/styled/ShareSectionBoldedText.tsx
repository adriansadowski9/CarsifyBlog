import styled from 'styled-components';

const ShareSectionBoldedText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.m};
  color: ${(props) => props.theme.colors.shareSection};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin: 0;
  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    font-size: ${(props) => props.theme.fontSizes.xl};
  }
`;

export default ShareSectionBoldedText;
