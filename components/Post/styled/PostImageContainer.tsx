import styled from 'styled-components';

const PostImageContainer = styled.div<{ isCarData: boolean }>`
  position: relative;
  width: calc(100% + 2 * ${(props) => props.theme.spaces.s});
  margin-left: -${(props) => props.theme.spaces.s};
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${(props) => (!props.isCarData ? '0' : '256px')};
  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    margin-left: 0;
    width: 100%;
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    margin: 0;
  }
`;

export default PostImageContainer;
