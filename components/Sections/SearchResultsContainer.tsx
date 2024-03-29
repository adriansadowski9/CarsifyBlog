import styled from 'styled-components';

const SearchResultsContainer = styled.div`
  display: grid;
  column-gap: ${(props) => props.theme.spaces.s};

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default SearchResultsContainer;
