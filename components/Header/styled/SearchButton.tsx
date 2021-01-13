import styled from 'styled-components';

const SearchButton = styled.button`
  background: none;
  border: none;
  padding: ${(props) => props.theme.spaces.xxxs};
  margin-right: ${(props) => props.theme.spaces.xxs};
  cursor: pointer;
  line-height: 0;

  svg {
    width: 23px;
    height: 23px;
  }

  &:focus {
    outline: none;
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    margin-right: ${(props) => props.theme.spaces.s};

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export default SearchButton;
