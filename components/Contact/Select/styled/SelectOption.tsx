import styled from 'styled-components';

const SelectOption = styled.li<{ isActive: boolean }>`
  padding: ${(props) => props.theme.spaces.xxxs} ${(props) => props.theme.spaces.xxs};
  background-color: ${(props) => (props.isActive ? '#858585' : 'transparent')};
  transition: all 0.3s;
  &:hover {
    background-color: #858585;
  }
`;

export default SelectOption;
