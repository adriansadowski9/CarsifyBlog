import styled from 'styled-components';

const CategoriesContainer = styled.ul<{ height: string }>`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 15px;
  justify-items: center;
  margin-bottom: ${(props) => props.theme.spaces.m};
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    grid-template-columns: 1fr;
    column-gap: 0;
  }
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    width: 400px;
  }

  li:last-child {
    margin-bottom: 0;
  }
`;

export default CategoriesContainer;
