import styled from 'styled-components';

const TipsContainer = styled.div<{
  isHorizontal: boolean;
  notEnoughItems: boolean;
  hasLongCategories?: boolean;
}>`
  display: grid;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    grid-template-columns: 400px 400px;

    ul {
      grid-column: span 2;
    }
    column-gap: 30px;
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    grid-template-columns: 400px 400px 400px;
    ul {
      grid-column: span 1;
    }
    ${(props) =>
      props.hasLongCategories &&
      `
      ul:first-child {
        grid-row: 1 / span 2;
      }
    `}
    ${(props) =>
      props.isHorizontal
        ? ''
        : `
      display: grid;
      grid-template-columns:400px;
      
    `}
  }
`;

export default TipsContainer;
