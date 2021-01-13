import styled from 'styled-components';

const Row = styled.div`
  display: grid;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    grid-template-columns: 820px;
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    grid-template-columns: 820px 400px;
    grid-gap: ${(props) => props.theme.spaces.xl};
  }
`;

export default Row;
