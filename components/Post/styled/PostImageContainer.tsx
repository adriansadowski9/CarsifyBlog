import styled from 'styled-components';

const PostImageContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 256px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    margin: 0;
  }
`;

export default PostImageContainer;
