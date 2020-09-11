import styled from 'styled-components';

const TipsSection = styled.section<{
  isHorizontal: boolean;
  notEnoughItems: boolean;
  hasCategories?: boolean;
}>`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    ${(props) =>
      props.hasCategories &&
      `
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 30px;
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
