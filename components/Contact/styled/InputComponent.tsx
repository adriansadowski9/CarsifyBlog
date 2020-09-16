import styled from 'styled-components';

const InputComponent = styled.input.attrs(({ type }) => ({
  type: type || 'text',
}))<{ sizeW; sizeH }>`
  width: ${(props) => props.sizeW};
  height: ${(props) => props.sizeH};
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.l};
  padding-left: ${(props) => props.theme.spaces.xxs};
  padding-top: ${(props) => props.theme.spaces.m};
  background: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  resize: none;
`;

export default InputComponent;
