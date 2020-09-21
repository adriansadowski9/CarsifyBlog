import styled from 'styled-components';

const ChoosedCategory = styled.span<{ width: string; height: string }>`
  display: flex;
  justify-content: space-between;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-bottom: 2px solid ${(props) => props.theme.colors.inputBorder};
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.l};
  padding-left: ${(props) => props.theme.spaces.xxs};
  padding-top: ${(props) => props.theme.spaces.xl};
`;

export default ChoosedCategory;
