import styled from 'styled-components';

const ArticleCardTitle = styled.h3`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.m};
  color: ${(props) => props.theme.colors.text};
  margin-top: 0;
  margin-bottom: ${(props) => props.theme.spaces.xxs};
  margin-right: 6px;
`;

export default ArticleCardTitle;
