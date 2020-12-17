import styled from 'styled-components';

const TipCardImage = styled.img<{ smallerCard: boolean }>`
  width: 100%;
  height: ${(props) => (props.smallerCard ? '212px' : '265px')};
  object-fit: cover;
  display: block;
`;

export default TipCardImage;
