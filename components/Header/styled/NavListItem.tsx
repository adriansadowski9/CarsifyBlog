import ChevronWrapper from './ChevronWrapper';

import styled from 'styled-components';

import DropdownContainer from '@components/Dropdown/styled/DropdownContainer';

const NavListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.spaces.s};
    
    &:hover ${DropdownContainer} {
      
      opacity: 1;
      visibility: visible;
      height:auto;
    }
    &:hover ${ChevronWrapper} {
      transition:transform 1s;
      transform:rotate(180deg)
    }
  }
`;

export default NavListItem;
