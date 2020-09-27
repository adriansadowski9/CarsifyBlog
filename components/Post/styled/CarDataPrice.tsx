import styled from 'styled-components';

const CarDataPrice = styled.div`
  margin-top: ${(props) => props.theme.spaces.s};
  color: ${(props) => props.theme.colors.adLocalization};
  font-size: ${(props) => props.theme.fontSizes.m};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  text-align: right;

  @media screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    font-size: ${(props) => props.theme.fontSizes.xl};
  }
`;

export default CarDataPrice;
