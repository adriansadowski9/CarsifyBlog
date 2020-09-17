import styled from 'styled-components';

const Text = styled.div`
  width: 100%;
  text-align: justify;
  font-size: ${(props) => props.theme.fontSizes.m};
  color: ${(props) => props.theme.colors.text};
  margin-top: ${(props) => props.theme.spaces.xs};
`;

export default Text;
