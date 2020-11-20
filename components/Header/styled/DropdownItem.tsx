import styled from 'styled-components';

const DropdownItem = styled.li<{ isActive: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  margin-top: ${(props) => props.theme.spaces.xxxs};
  justify-content: center;
  ${(props) =>
    props.isActive
      ? `
    &:after {
        content: '';
        position: absolute;
        width: 5px;
        height: 100%;
        top: 0;
        right: ${props.theme.spaces.l};
        bottom: 0;
        background: ${props.theme.colors.menuActiveItem};
    }
  `
      : ''}
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    margin: 0;
    &:after {
      width: 0;
      height: 0;
    }
  }
`;

export default DropdownItem;
