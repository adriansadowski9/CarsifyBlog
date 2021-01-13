import styled from 'styled-components';

const CarDataName = styled.h2`
  margin: 0;
  font-size: ${(props) => props.theme.fontSizes.l};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-overflow: clip;
  white-space: nowrap;
  overflow: hidden;

  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    font-size: ${(props) => props.theme.fontSizes.xl};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    font-size: ${(props) => props.theme.fontSizes.xxxl};
  }
`;

export default CarDataName;
