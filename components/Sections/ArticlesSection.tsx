import styled from 'styled-components';

const ArticlesSection = styled.section<{ withMargin: boolean; notEnoughItems: boolean }>`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    margin-right: ${(props) => (props.withMargin ? props.theme.spaces.xl : 0)};

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
