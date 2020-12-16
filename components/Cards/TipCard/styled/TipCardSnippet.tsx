import styled from 'styled-components';

const TipCardSnippet = styled.p`
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${(props) => props.theme.colors.tipText};
  margin: 0 0 ${(props) => props.theme.spaces.xxs} 0;
  padding-right: 9px;
  text-align: justify;
  overflow: hidden;
  position: relative;

  &::before {
    content: '\\02026';
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
    background: ${(props) => props.theme.colors.tipCardBg};
  }
`;

export default TipCardSnippet;
