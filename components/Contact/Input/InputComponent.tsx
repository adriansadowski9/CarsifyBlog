import styled from 'styled-components';

const InputComponent = styled.input<{
  customHeight: string;
  textarea?: boolean;
  customPaddingBottom?: string;
  useBiggerFontForDesktop?: boolean;
}>`
  width: 100%;
  height: ${(props) => (props.customHeight ? `${props.customHeight}px` : '100%')};
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) =>
    props.useBiggerFontForDesktop ? props.theme.fontSizes.m : props.theme.fontSizes.l};

  padding-left: ${(props) => props.theme.spaces.xs};
  padding-top: ${(props) => (props.textarea ? props.theme.spaces.l : props.theme.spaces.xs)};
  ${(props) => (props.customPaddingBottom ? `padding-bottom: ${props.customPaddingBottom};` : '')}

  background: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.inputBorder};
  resize: none;
  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    margin: 0;
    ${(props) => (props.useBiggerFontForDesktop ? `font-size: ${props.theme.fontSizes.l};` : '')}
  }
`;

export default InputComponent;
