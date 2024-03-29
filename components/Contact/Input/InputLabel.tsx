import styled from 'styled-components';

const InputLabel = styled.label`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.text};
  text-transform: uppercase;
`;
export default InputLabel;
