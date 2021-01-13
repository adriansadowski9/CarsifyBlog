import styled from 'styled-components';

const TipCardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 228px;
  padding: ${(props) => props.theme.spaces.s} ${(props) => props.theme.spaces.s}
    ${(props) => props.theme.spaces.xs} ${(props) => props.theme.spaces.s};
  background: ${(props) => props.theme.colors.tipCardBg};

  @media only screen and (min-width: 768px) {
    max-height: 178px;
  }
`;

export default TipCardInfoContainer;
