import styled from 'styled-components';

const AdCardCarInfoPrice = styled.p`
  color: ${(props) => props.theme.colors.adPrice};
  font-size: ${(props) => props.theme.fontSizes.m};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin-top: ${(props) => props.theme.spaces.xxxs};
  margin-bottom: ${(props) => props.theme.spaces.xxs};
  text-align: right;
`;

export default AdCardCarInfoPrice;
