import styled from 'styled-components';

const PostImageContainer = styled.div<{ isArticles: boolean }>`
  position: relative;
  width: 120%;
  margin-left: -10%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${(props) => (props.isArticles ? '0' : '256px')};
  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    margin-left: 0;
    width: 100%;
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    margin: 0;
  }
`;

export default PostImageContainer;
