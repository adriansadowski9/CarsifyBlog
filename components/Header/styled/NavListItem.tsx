import DropdownContainer from './DropdownContainer';
import DropdownInnerWrapper from './DropdownInnerWrapper';

import styled from 'styled-components';

const NavListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.colors.mobileMenuBorderBottom};

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    border-bottom: none;
    margin-bottom: 0;
    &:hover ${DropdownContainer} {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export default NavListItem;
