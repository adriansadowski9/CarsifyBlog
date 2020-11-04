import styled from 'styled-components';

const CategoriesContainer = styled.ul<{ containerHeight: string }>`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 15px;
  justify-items: center;
  margin-bottom: ${(props) => props.theme.spaces.xxs};

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: ${(props) => props.containerHeight};
    margin-bottom: ${(props) => props.theme.spaces.m};
  }

  li:last-child {
    margin-bottom: 0;
  }
`;

export default CategoriesContainer;
