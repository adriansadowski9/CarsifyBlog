import styled from 'styled-components';

const ArticleCardContainer = styled.a`
  position: relative;
  width: 100%;
  margin-bottom: ${(props) => props.theme.spaces.m};
  text-decoration: none;
  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    width: 400px;
    height: 390px;
    cursor: pointer;
  }
`;

export default ArticleCardContainer;
