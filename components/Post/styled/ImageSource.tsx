import styled from 'styled-components';

const ImageSource = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${(props) => props.theme.colors.imageSourceText};
  background: ${(props) => props.theme.colors.imageSourceBg};
  padding: ${(props) => props.theme.spaces.xxxs} ${(props) => props.theme.spaces.xxs};
  margin: 0;
`;

export default ImageSource;
