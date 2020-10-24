import styled from 'styled-components';

const BreadcrumbsText = styled.p`
  color: ${(props) => props.theme.colors.breadcrumbs};
  font-size: ${(props) => props.theme.fontSizes.xs};
  margin: 0;
`;

export default BreadcrumbsText;
