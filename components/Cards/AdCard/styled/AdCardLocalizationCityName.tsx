import styled from 'styled-components';

const AdCardLocalizationCityName = styled.p`
  color: ${(props) => props.theme.colors.adLocalization};
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin: 0;
`;

export default AdCardLocalizationCityName;
