import styled from 'styled-components';

const ShareSectionText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.m};
  color: ${(props) => props.theme.colors.shareSection};
  margin: 0;
  margin-right: ${(props) => props.theme.spaces.xxxs};
`;

export default ShareSectionText;
