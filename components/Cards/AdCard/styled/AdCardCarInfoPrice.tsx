import styled from 'styled-components';

const AdCardCarInfoPrice = styled.p`
  color: ${(props) => props.theme.colors.adPrice};
  font-size: ${(props) => props.theme.fontSizes.m};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin-top: 0;
  margin-bottom: 7px;
  margin-right: 9px;
  text-align: right;
`;

export default AdCardCarInfoPrice;
