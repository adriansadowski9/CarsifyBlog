import styled from 'styled-components';

const SearchButtonsContainer = styled.div<{ isSearchOpened: boolean }>`
  position: absolute;
  top: 50%;
  right: ${(props) => props.theme.spaces.l};
  transform: translateY(-50%);
  visibility: ${(props) => (props.isSearchOpened ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isSearchOpened ? '1' : '0')};
  transition: opacity 0.2s;

  button:last-of-type {
    margin-right: 0;
  }
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    right: ${(props) => props.theme.spaces.xxs};
  }
`;

export default SearchButtonsContainer;
