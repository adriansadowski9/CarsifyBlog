import styled from 'styled-components';

const Text = styled.div`
  width: 100%;
  text-align: justify;
  font-size: ${(props) => props.theme.fontSizes.m};
  color: ${(props) => props.theme.colors.text};
  margin-top: ${(props) => props.theme.spaces.xs};
  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    font-size: ${(props) => props.theme.fontSizes.l};
  }
`;

export default Text;
