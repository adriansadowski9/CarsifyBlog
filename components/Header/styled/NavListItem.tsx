import styled from 'styled-components';

import DropdownContainer from '@components/Header/styled/DropdownContainer';

const NavListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.spaces.s};
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    margin-bottom: 0;
    &:hover ${DropdownContainer} {
      opacity: 1;
      visibility: visible;
    }
  }
}
`;

export default NavListItem;
