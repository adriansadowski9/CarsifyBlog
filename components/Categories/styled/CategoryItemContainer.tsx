import styled from 'styled-components';

const CategoryItemContainer = styled.li<{ isActive: boolean }>`
  flex: 1;
  width: 100%;
  background: ${(props) =>
    props.isActive ? props.theme.colors.categoryBoxActiveBg : props.theme.colors.categoryBoxBg};
  margin-bottom: ${(props) => props.theme.spaces.xs};
  cursor: pointer;
`;

export default CategoryItemContainer;
