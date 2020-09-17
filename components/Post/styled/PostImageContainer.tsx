import styled from 'styled-components';

const PostImageContainer = styled.div<{ isArticles: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${(props) => (props.isArticles ? '0' : '256px')};
  @media screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    margin: 0;
  }
`;

export default PostImageContainer;
