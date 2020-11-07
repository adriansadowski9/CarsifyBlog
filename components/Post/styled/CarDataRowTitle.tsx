import styled from 'styled-components';

const CarDataRowTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  margin: 0;

  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    font-size: ${(props) => props.theme.fontSizes.s};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    font-size: ${(props) => props.theme.fontSizes.m};
  }
`;

export default CarDataRowTitle;
