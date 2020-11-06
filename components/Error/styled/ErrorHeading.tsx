import styled from 'styled-components';

const ErrorHeading = styled.h1`
  margin: 0;
  margin-bottom: ${(props) => props.theme.spaces.xs};
  font-size: ${(props) => props.theme.fontSizes.xxl};

  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    font-size: ${(props) => props.theme.fontSizes.xxxl};
  }
`;

export default ErrorHeading;
