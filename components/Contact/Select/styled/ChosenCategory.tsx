import styled from 'styled-components';

const ChosenCategory = styled.span<{ height: string; gridRow: string }>`
  display: flex;
  justify-content: space-between;
  grid-row: ${(props) => props.gridRow};
  height: ${(props) => props.height};
  border-bottom: 1px solid ${(props) => props.theme.colors.inputBorder};
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.l};
  padding-left: ${(props) => props.theme.spaces.xs};
  padding-top: ${(props) => props.theme.spaces.l};
`;

export default ChosenCategory;
