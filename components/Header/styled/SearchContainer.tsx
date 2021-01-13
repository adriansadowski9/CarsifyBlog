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

  z-index: ${(props) => (props.isSearchOpened ? '1001' : '1')};
  opacity: ${(props) => (props.isSearchOpened ? '1' : '0')};
  width: ${(props) => (props.isSearchOpened ? 'auto' : '0')};
  transition: all 0.2s;
  padding: 0 ${(props) => props.theme.spaces.s};

  @media only screen and (min-width: 1025px) {
    padding: 0;
    max-width: 71vw;
  }

  @media only screen and (min-width: 1120px) {
    max-width: 820px;
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    max-width: 74vw;
  }

  @media only screen and (min-width: 1400px) {
    max-width: 77vw;
  }

  @media only screen and (min-width: 1580px) {
    max-width: 1260px;
  }
`;

export default SearchContainer;
