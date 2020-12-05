import styled from 'styled-components';

const SearchContainer = styled.div<{ isSearchOpened: boolean }>`
  position: relative;
  display: flex;
  flex: 1;
  margin: 0 ${(props) => props.theme.spaces.s};
  align-self: flex-end;
  ${(props) => (!props.isSearchOpened ? 'display: none' : 'display: block')};

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    width: 100%;
    max-width: 1260px;
  }
`;

export default SearchContainer;
