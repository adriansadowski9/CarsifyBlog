import styled from 'styled-components';

const NavListItem = styled.li<{ isIcons?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  border-bottom: ${(props) =>
    props.isIcons ? 'none' : `1px solid ${props.theme.colors.mobileMenuBorderBottom}`};
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

export default NavListItem;
