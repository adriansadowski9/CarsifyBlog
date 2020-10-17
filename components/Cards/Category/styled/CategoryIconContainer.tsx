import styled from 'styled-components';

const CategoryIconContainer = styled.div<{ backgroundColor: string; iconColor: string }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default CategoryIconContainer;
