import styled from 'styled-components';

const SelectButton = styled.button`
  color: ${(props) => props.theme.colors.text};
  border: none;
  background: transparent;
  width: 100%;
  text-align: left;
  padding: ${(props) => props.theme.spaces.xs} ${(props) => props.theme.spaces.xs};
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.selectHover};
  }
`;

export default SelectButton;
