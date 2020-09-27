import styled from 'styled-components';

const AdCardImage = styled.img`
  width: 100%;
  height: 265px;
  object-fit: cover;
  display: block;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    height: 200px;
  }
`;

export default AdCardImage;
