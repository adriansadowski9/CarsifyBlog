import styled from 'styled-components';

const Heading = styled.h1`
  width: 100%;
  text-align: left;
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.text};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin: 0 auto;
  margin-top: ${(props) => props.theme.spaces.xxxs};
  margin-bottom: ${(props) => props.theme.spaces.xs};

  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    width: 600px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    text-align: center;
    width: 800px;
  }
`;

export default Heading;
