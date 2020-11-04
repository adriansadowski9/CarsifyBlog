import styled from 'styled-components';

const BreadcrumbsLink = styled.a`
  margin-right: ${(props) => props.theme.spaces.xxs};
  color: ${(props) => props.theme.colors.breadcrumbs};
  font-size: ${(props) => props.theme.fontSizes.xs};
  text-decoration: none;
`;

export default BreadcrumbsLink;
