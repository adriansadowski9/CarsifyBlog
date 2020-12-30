import styled from 'styled-components';

const TipCardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 178px;
  padding: ${(props) => props.theme.spaces.s} ${(props) => props.theme.spaces.s}
    ${(props) => props.theme.spaces.xs} ${(props) => props.theme.spaces.s};
  background: ${(props) => props.theme.colors.tipCardBg};
`;

export default TipCardInfoContainer;
