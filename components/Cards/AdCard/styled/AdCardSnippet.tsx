import styled from 'styled-components';

const AdCardSnippet = styled.p`
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${(props) => props.theme.colors.text};
  margin: 0 0 ${(props) => props.theme.spaces.xxs} 0;
`;

export default AdCardSnippet;
