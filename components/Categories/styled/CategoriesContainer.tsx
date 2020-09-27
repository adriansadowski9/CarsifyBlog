import styled from 'styled-components';

const CategoriesContainer = styled.ul<{ height: string }>`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.spaces.m};

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    width: 400px;
  }

  li:last-child {
    margin-bottom: 0;
  }
`;

export default CategoriesContainer;
