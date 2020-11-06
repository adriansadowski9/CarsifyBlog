import styled from 'styled-components';

const ErrorButton = styled.button`
  margin: 0;
  padding: ${(props) => `${props.theme.spaces.s} ${props.theme.spaces.xl}`};
  font-size: ${(props) => props.theme.fontSizes.m};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  border: none;
  background-color: ${(props) => props.theme.colors.errorButtonBg};
  color: ${(props) => props.theme.colors.errorButtonText};

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    font-size: ${(props) => props.theme.fontSizes.l};
  }
`;

export default ErrorButton;
