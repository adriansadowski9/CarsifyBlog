import styled from 'styled-components';

const AdCardInfoContainer = styled.div<{ enlargedCard: boolean }>`
  display: flex;
  flex-direction: column;
  max-height: 243px;
  margin: 0 ${(props) => props.theme.spaces.l};
  margin-top: -${(props) => (props.enlargedCard ? '68px' : props.theme.spaces.l)};
  padding: ${(props) => props.theme.spaces.xs} ${(props) => props.theme.spaces.xs} 0
    ${(props) => props.theme.spaces.xs};
  position: relative;
  z-index: 1;
  background: ${(props) => props.theme.colors.bg};

  @media only screen and (min-width: 768px) {
    height: 193px;
  }
`;

export default AdCardInfoContainer;
