import styled from 'styled-components';

const ErrorText = styled.p`
  margin: 0;
  margin-bottom: ${(props) => props.theme.spaces.l};
  font-size: ${(props) => props.theme.fontSizes.m};

  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    font-size: ${(props) => props.theme.fontSizes.l};
    margin-bottom: ${(props) => props.theme.spaces.xxxl};
  }
`;

export default ErrorText;
