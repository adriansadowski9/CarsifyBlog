import styled from 'styled-components';

const Heading = styled.h1`
  width: 100%;
  text-align: left;
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.text};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin-top: ${(props) => props.theme.spaces.xxxs};
  margin-bottom: ${(props) => props.theme.spaces.xxxs};

  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    margin-bottom: ${(props) => props.theme.spaces.xs};
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.xxl};
  }
`;

export default Heading;
