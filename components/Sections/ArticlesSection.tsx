import styled from 'styled-components';

const ArticlesSection = styled.section<{
  withMargin: boolean;
  hasLongCategories: boolean;
  notEnoughItems: boolean;
  indexPage?: boolean;
}>`
  display: grid;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    grid-template-columns: 1fr 1fr;
    column-gap: ${(props) => (props.indexPage ? '20px' : '30px')};
    ul {
      grid-column: span 2;
    }
  }
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    grid-template-columns: ${(props) => (props.indexPage ? '1fr 1fr' : '1fr 1fr 1fr')};
    ul {
      grid-column: auto;
    }
    margin-right: ${(props) => (props.withMargin ? props.theme.spaces.xl : 0)};
    ${(props) =>
      props.hasLongCategories &&
      `
      ul:first-child {
        grid-row: 1 / span 2;
      }
    `}

    ${(props) =>
      props.notEnoughItems
        ? `&::after {
          content: "";
          flex: auto;
          max-width: 400px;
        }`
        : ''}
  }
`;

export default ArticlesSection;
