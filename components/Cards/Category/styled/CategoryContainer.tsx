import styled from 'styled-components';

const CategoryContainer = styled.div<{ paddingRight?: string }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${(props) => (props.paddingRight ? `padding-right: ${props.paddingRight};` : '')}
`;

export default CategoryContainer;
