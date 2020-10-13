import styled from 'styled-components';

const ShareSectionText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.m};
  color: ${(props) => props.theme.colors.shareSection};
  margin: 0;
  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    margin-right: ${(props) => props.theme.spaces.xxxs};
    font-size: ${(props) => props.theme.fontSizes.xl};
  }
`;

export default ShareSectionText;
