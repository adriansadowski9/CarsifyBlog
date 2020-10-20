import styled from 'styled-components';

const TipsSection = styled.section<{
  isHorizontal: boolean;
  notEnoughItems: boolean;
  hasLongCategories?: boolean;
}>`
  display: grid;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    grid-template-columns: 1fr 1fr;

    column-gap: 30px;
    ul {
      grid-column: span 2;
    }
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    grid-template-columns: 1fr 1fr 1fr;
    ul {
      grid-column: auto;
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
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    `}
  }
`;

export default TipsSection;
