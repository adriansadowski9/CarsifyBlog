import DropdownContainer from './DropdownContainer';

import styled from 'styled-components';

const NavListItem = styled.li<{ isTopOfPage: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.colors.mobileMenuBorderBottom};

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    height: 100%;
    border-bottom: none;
    margin-bottom: 0;
    &:hover ${DropdownContainer} {
      opacity: ${(props) => (props.isTopOfPage ? '1' : '0')};
      visibility: ${(props) => (props.isTopOfPage ? 'visible' : 'hidden')};
    }
  }
`;

export default NavListItem;
