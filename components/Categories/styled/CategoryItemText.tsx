import styled from 'styled-components';

const CategoryItemText = styled.a<{ isActive: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.isActive ? props.theme.colors.categoryBoxActiveText : props.theme.colors.categoryBoxText};
  font-size: ${(props) => props.theme.fontSizes.s};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin: 0;
  text-transform: uppercase;
  text-decoration: none;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    font-size: ${(props) => props.theme.fontSizes.l};
  }
`;

export default CategoryItemText;
