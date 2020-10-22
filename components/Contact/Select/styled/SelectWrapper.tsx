import styled from 'styled-components';

const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => props.theme.spaces.xxs};
  &:hover {
    cursor: pointer;
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    grid-area: category;
    grid-column: span 9;

    margin-bottom: 0;
  }
`;

export default SelectWrapper;
