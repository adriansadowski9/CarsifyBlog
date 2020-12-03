import styled from 'styled-components';

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  margin-left: ${(props) => props.theme.spaces.s};
  align-self: flex-end;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    margin-right: ${(props) => props.theme.spaces.s};
    max-width: 1260px;
  }
`;

export default SearchContainer;
