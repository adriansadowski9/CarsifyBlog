import styled from 'styled-components';

const ArticleCardImage = styled.img`
  width: 100%;
  height: 215px;
  object-fit: cover;
  display: block;

  @media only screen and (min-width: 768px) {
    height: 265px;
  }
`;

export default ArticleCardImage;
