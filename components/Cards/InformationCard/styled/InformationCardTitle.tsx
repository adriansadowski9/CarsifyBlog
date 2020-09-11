import styled from 'styled-components';

const InformationCardTitle = styled.h3`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.m};
  color: ${(props) => props.theme.colors.informationText};
  margin-top: 0;
  margin-bottom: ${(props) => props.theme.spaces.xxs};
  text-align: right;
`;

export default InformationCardTitle;
