import styled from 'styled-components';

const BreadcrumbContainerItem = styled.div<{ isLast: boolean }>`
  display: flex;
  align-items: center;
  margin-right: ${(props) => (props.isLast ? props.theme.spaces.xxs : '0')};
`;

export default BreadcrumbContainerItem;
