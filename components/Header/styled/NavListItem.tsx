import styled from 'styled-components';

import DropdownContainer from '@components/Header/styled/DropdownContainer';

const NavListItem = styled.li<{ isOpen }>`
  position: absolute;
  top:50px;
  text-align:center;
  margin-bottom: ${(props) => props.theme.spaces.s};
  transition: all 5000ms cubic-bezier(0, 0.995, 0.99, 1);
  font-size:${(props) => (props.isOpen ? '21px' : '0')}
  opacity:${(props) => (props.isOpen ? '1' : '0')}
  &:nth-of-type(1) {
    top: 120px;
    transition-delay: 0s;
  }
  &:nth-of-type(2) {
    top: 190px;
    transition-delay: 0.03s;
  }
  &:nth-of-type(3) {
    top: 260px;
    transition-delay: 0.06s;
  }
  &:nth-of-type(4) {
    top: 330px;
    transition-delay: 0.09s;
  }
  &:nth-of-type(5) {
    top: 400px;
    transition-delay: 0.12s;
  }
  &:nth-of-type(6) {
    top: 470px;
    transition-delay: 0.15s;
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
