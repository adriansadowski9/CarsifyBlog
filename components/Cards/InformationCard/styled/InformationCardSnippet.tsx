import styled from 'styled-components';

const InformationCardSnippet = styled.p`
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${(props) => props.theme.colors.informationText};
  margin: 0 0 ${(props) => props.theme.spaces.xxs} 0;
  padding-right: 9px;
  text-align: right;
  max-height: 44px;
  overflow: hidden;
  position: relative;

  &::before {
    content: '...';
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export default InformationCardSnippet;
