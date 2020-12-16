import styled from 'styled-components';

const SearchButtonsContainer = styled.div<{ isSearchOpened: boolean }>`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  visibility: ${(props) => (props.isSearchOpened ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isSearchOpened ? '1' : '0')};
  transition: opacity 1s;
  button:last-of-type {
    margin-right: 0;
  }
`;

export default SearchButtonsContainer;
