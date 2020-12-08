import styled from 'styled-components';

const AdCardSnippet = styled.p<{ enlargedCard: boolean }>`
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${(props) => props.theme.colors.text};
  margin: 0 0 ${(props) => props.theme.spaces.xxs} 0;
  ${(props) =>
    props.enlargedCard
      ? `
    height: 42px;
    overflow: hidden;
    text-overflow: ellipsis;
  `
      : ''}
`;

export default AdCardSnippet;
