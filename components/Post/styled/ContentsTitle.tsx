import styled from 'styled-components';

const ContentsTitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes.m};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spaces.xxxs};
  margin-left: ${(props) => props.theme.spaces.s};
`;

export default ContentsTitle;
