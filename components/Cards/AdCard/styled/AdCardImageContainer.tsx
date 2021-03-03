import styled from 'styled-components';

const AdCardImageContainer = styled.div<{ enlargedCard: boolean }>`
  position: relative;
  width: 100%;
  height: 215px;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    height: 265px;
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    height: ${(props) => (props.enlargedCard ? '265px' : '200px')};
  }
`;

export default AdCardImageContainer;
