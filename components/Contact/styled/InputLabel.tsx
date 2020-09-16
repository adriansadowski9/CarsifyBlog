import styled from 'styled-components';

const InputLabel = styled.label<{ leftProps }>`
  width: 100%;
  position: absolute;
  top: 0;
  left: ${(props) => props.leftProps};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.text};
  text-transform: uppercase;
`;
export default InputLabel;
