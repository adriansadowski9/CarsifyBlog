import styled from 'styled-components';

const ArticleCardSnippet = styled.p`
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${(props) => props.theme.colors.text};
  margin: 0 0 ${(props) => props.theme.spaces.s} 0;
`;

export default ArticleCardSnippet;
