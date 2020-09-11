import styled from 'styled-components';

const AdCardLocalizationContainer = styled.div`
  margin: ${(props) => props.theme.spaces.xxxs} 0;

  svg {
    width: 8px;
    height: 12px;
    fill: ${(props) => props.theme.colors.adLocalization};
  }
`;

export default AdCardLocalizationContainer;
