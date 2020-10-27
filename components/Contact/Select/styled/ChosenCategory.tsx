import styled from 'styled-components';

const ChosenCategory = styled.button<{ customHeight: string; gridRow: string }>`
  display: flex;
  justify-content: space-between;
  grid-row: ${(props) => props.gridRow};
  height: ${(props) => props.customHeight};
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.inputBorder};
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.l};
  padding-left: ${(props) => props.theme.spaces.xs};
  padding-top: ${(props) => props.theme.spaces.l};
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

export default ChosenCategory;
