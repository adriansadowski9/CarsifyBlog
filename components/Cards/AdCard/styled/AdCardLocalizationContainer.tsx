import styled from 'styled-components';

const AdCardLocalizationContainer = styled.div`
  margin-bottom: ${(props) => props.theme.spaces.xxxs};
  margin-right: 9px;

  svg {
    width: 8px;
    height: 12px;
    fill: ${(props) => props.theme.colors.adLocalization};
  }
`;

export default AdCardLocalizationContainer;
