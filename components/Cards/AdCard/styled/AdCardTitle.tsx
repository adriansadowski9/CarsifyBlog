import styled from 'styled-components';

const AdCardTitle = styled.h3`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.m};
  color: ${(props) => props.theme.colors.text};
  margin: 0;
  padding-bottom: ${(props) => props.theme.spaces.xxs};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export default AdCardTitle;
