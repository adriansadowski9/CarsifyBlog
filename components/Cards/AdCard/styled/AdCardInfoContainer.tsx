import styled from 'styled-components';

const AdCardInfoContainer = styled.div<{ enlargedCard: boolean }>`
  display: flex;
  flex-direction: column;
  max-height: 193px;
  margin: 0 ${(props) => props.theme.spaces.l};
  margin-top: -${(props) => (props.enlargedCard ? '68px' : props.theme.spaces.l)};
  padding: ${(props) => props.theme.spaces.xs} 6px 0 ${(props) => props.theme.spaces.xs};
  position: relative;
  z-index: 1;
  background: ${(props) => props.theme.colors.bg};
`;

export default AdCardInfoContainer;
