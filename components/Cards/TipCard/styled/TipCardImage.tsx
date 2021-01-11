import styled from 'styled-components';

const TipCardImage = styled.img<{ smallerCard: boolean }>`
  width: 100%;
  height: ${(props) => (props.smallerCard ? '162px' : '215px')};
  object-fit: cover;
  display: block;

  @media only screen and (min-width: 768px) {
    height: ${(props) => (props.smallerCard ? '212px' : '265px')};
  }
`;

export default TipCardImage;
