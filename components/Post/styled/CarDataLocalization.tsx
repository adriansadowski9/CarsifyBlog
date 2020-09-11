import styled from 'styled-components';

const CarDataLocalization = styled.div`
  margin-bottom: ${(props) => props.theme.spaces.xxs};
  color: ${(props) => props.theme.colors.adLocalization};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-size: ${(props) => props.theme.fontSizes.xs};

  p {
    margin: 0;
  }

  svg {
    height: 20px;
    margin-right: ${(props) => props.theme.spaces.xs};
    fill: ${(props) => props.theme.colors.adLocalization};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    font-size: ${(props) => props.theme.fontSizes.l};
  }
`;

export default CarDataLocalization;
