import styled from 'styled-components';

const ArticleCardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 ${(props) => props.theme.spaces.l};
  margin-top: -${(props) => props.theme.spaces.l};
  padding: ${(props) => props.theme.spaces.xs} 6px 0 ${(props) => props.theme.spaces.xs};
  position: relative;
  z-index: 1;
  background: ${(props) => props.theme.colors.bg};
  max-height: 155px;
`;

export default ArticleCardInfoContainer;
