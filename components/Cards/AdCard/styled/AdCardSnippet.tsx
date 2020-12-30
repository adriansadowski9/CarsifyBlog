import styled from 'styled-components';

const AdCardSnippet = styled.p`
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${(props) => props.theme.colors.text};
  margin: 0;
  text-align: justify;
  overflow: hidden;
`;

export default AdCardSnippet;
