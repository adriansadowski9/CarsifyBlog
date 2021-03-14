import styled from 'styled-components';

const DropdownCategoryName = styled.li`
  font-size: ${(props) => props.theme.fontSizes.xxl};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin-top: ${(props) => props.theme.spaces.s};
  margin-left: ${(props) => props.theme.spaces.xl};
  margin-bottom: ${(props) => props.theme.spaces.xxs};
`;
export default DropdownCategoryName;
