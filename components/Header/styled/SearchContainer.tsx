import styled from 'styled-components';

const SearchContainer = styled.div<{ isSearchOpened: boolean }>`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  flex: ${(props) => (props.isSearchOpened ? '1' : '0')};
  margin: 0 auto;
  align-self: flex-end;
  transition: all 1s;
  z-index: ${(props) => (props.isSearchOpened ? '1001' : '1')};
  ${(props) => (props.isSearchOpened ? 'width:95%' : 'width:0')};
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    max-width: 1160px;
  }
`;

export default SearchContainer;
