import styled from 'styled-components';

const ErrorContainer = styled.div`
  margin-top: ${(props) => props.theme.spaces.xxl};
  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    margin-top: 100px;
  }
`;

export default ErrorContainer;
