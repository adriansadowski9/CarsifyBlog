import styled from 'styled-components';

const CarDataRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.spaces.xxxs};
  font-size: ${(props) => props.theme.fontSizes.xs};

  p {
    margin: 0;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    font-size: ${(props) => props.theme.fontSizes.m};
  }
`;

export default CarDataRow;
