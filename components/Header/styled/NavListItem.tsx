import styled from 'styled-components';

import DropdownContainer from '@components/Header/styled/DropdownContainer';

const NavListItem = styled.li<{ isOpen }>`
  position:relative;
  text-align:center;
  margin-bottom: ${(props) => props.theme.spaces.s};
  transition: all 300ms cubic-bezier(0, 0.995, 0.99, 1);
  font-size:${(props) => (props.isOpen ? '24px' : '0')};
  opacity:${(props) => (props.isOpen ? '1' : '0')};
  &:nth-of-type(1) {
    transition-delay: 0.06s;
  }
  &:nth-of-type(2) {
    transition-delay: 0.12s;
  }
  &:nth-of-type(3) {
    transition-delay: 0.18s;
  }
  &:nth-of-type(4) {
    transition-delay: 0.24s;
  }
  &:nth-of-type(5) {
    transition-delay: 0.30s;
  }
  &:nth-of-type(6) {
    transition-delay: 0.36s;
  }
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    margin-bottom: 0;
    &:hover ${DropdownContainer} {
      opacity: 1;
      visibility: visible;
      height:auto;
    }
    
  }
}
`;

export default NavListItem;
