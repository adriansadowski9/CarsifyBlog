import styled from 'styled-components';

const InputComponent = styled.input<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.l};
  padding-left: ${(props) => props.theme.spaces.xxs};
  padding-top: ${(props) => props.theme.spaces.m};
  margin-bottom: ${(props) => props.theme.spaces.s};
  background: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.inputBorder};
  resize: none;
  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    margin: 0;
  }
`;

export default InputComponent;
