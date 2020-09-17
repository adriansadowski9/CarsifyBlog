import styled from 'styled-components';

const Heading = styled.h1`
  width: 100%;
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.text};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin-top: ${(props) => props.theme.spaces.xxxs};
  margin-bottom: ${(props) => props.theme.spaces.xs};
`;

export default Heading;
