import styled from 'styled-components';

const SearchButtonsContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);

  button:last-of-type {
    margin-right: 0;
  }
`;

export default SearchButtonsContainer;
