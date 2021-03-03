import styled from 'styled-components';

const TipCardImageContainer = styled.div<{ smallerCard: boolean }>`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: ${(props) => (props.smallerCard ? '162px' : '215px')};

  @media only screen and (min-width: 768px) {
    height: ${(props) => (props.smallerCard ? '212px' : '265px')};
  }
`;

export default TipCardImageContainer;
