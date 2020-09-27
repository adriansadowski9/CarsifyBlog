import styled from 'styled-components';

const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-right: ${(props) => props.theme.spaces.s};
  &:hover {
    cursor: pointer;
  }
`;

export default SelectWrapper;
