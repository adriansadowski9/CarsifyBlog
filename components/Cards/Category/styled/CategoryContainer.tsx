import styled from 'styled-components';

const CategoryContainer = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${(props) => props.color};
`;

export default CategoryContainer;
