import styled from 'styled-components';

const LetsTalk = styled.h1`
  margin: ${(props) => props.theme.spaces.xxxs} 0;
  font-size: ${(props) => props.theme.fontSizes.l};
  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    font-size: ${(props) => props.theme.fontSizes.xxl};
  }
`;

export default LetsTalk;
