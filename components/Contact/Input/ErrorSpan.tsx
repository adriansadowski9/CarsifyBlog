import styled from 'styled-components';

const ErrorSpan = styled.span`
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${(props) => props.theme.colors.validationError};
  margin-left: ${(props) => props.theme.spaces.xxxs};
  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    font-size: ${(props) => props.theme.fontSizes.s};
  }
`;
export default ErrorSpan;
