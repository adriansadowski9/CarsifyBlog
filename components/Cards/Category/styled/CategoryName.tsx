import styled from 'styled-components';

const CategoryName = styled.p<{ categoryColor: string }>`
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${(props) => props.categoryColor};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  text-transform: uppercase;
  margin: 0 ${(props) => props.theme.spaces.xxs} 0 0;
`;

export default CategoryName;
