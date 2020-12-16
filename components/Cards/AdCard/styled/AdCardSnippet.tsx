import styled from 'styled-components';

const AdCardSnippet = styled.p<{ enlargedCard: boolean }>`
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${(props) => props.theme.colors.text};
  margin: 0;
  padding-right: 9px;
  text-align: justify;
  overflow: hidden;
  position: relative;

  &::before {
    content: '...';
    position: absolute;
    bottom: 0;
    right: 0;
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    width: 9px;
    height: 1rem;
    background: ${(props) => props.theme.colors.bg};
  }
`;

export default AdCardSnippet;
