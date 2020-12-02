import styled from 'styled-components';

const DropdownItem = styled.li<{ isActive: boolean }>`
  position: relative;
  width: 100%;
  display: flex;

  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.mobileMenuBorderBottom};
  svg {
    transform: rotate(90deg);
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    margin: 0;
    &:after {
      width: 0;
      height: 0;
    }
  }
`;

export default DropdownItem;
