import styled from 'styled-components';

const CategoryItemText = styled.h2<{ isActive: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.isActive ? props.theme.colors.categoryBoxActiveText : props.theme.colors.categoryBoxText};
  font-size: ${(props) => props.theme.fontSizes.l};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin: 0;
  text-transform: uppercase;
`;

export default CategoryItemText;
