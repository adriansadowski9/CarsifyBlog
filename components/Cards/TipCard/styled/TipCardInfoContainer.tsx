import styled from 'styled-components';

const TipCardInfoContainer = styled.div<{ smallerCard: boolean }>`
  display: flex;
  flex-direction: column;
  max-height: ${(props) => (props.smallerCard ? '178px' : '178px')};
  padding: ${(props) => props.theme.spaces.s} ${(props) => props.theme.spaces.s}
    ${(props) => props.theme.spaces.xs} ${(props) => props.theme.spaces.s};
  background: ${(props) => props.theme.colors.tipCardBg};
`;

export default TipCardInfoContainer;
