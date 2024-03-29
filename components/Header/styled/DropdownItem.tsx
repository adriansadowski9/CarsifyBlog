import LinkButton from './LinkButton';

import styled from 'styled-components';

const DropdownItem = styled.li`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.mobileMenuBorderBottom};
  svg {
    transform: rotate(90deg);
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    svg {
      position: absolute;
      transform: rotate(0deg);
      right: ${(props) => props.theme.spaces.xl};
    }
    margin: 0;
    &:after {
      width: 0;
      height: 0;
    }
  }
`;

export default DropdownItem;
