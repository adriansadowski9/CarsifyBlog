import styled from 'styled-components';

const DropdownItem = styled.li<{ isActive: boolean }>`
  margin-top: ${(props) => props.theme.spaces.xxxs};
  position: relative;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    width: 100%;
    padding: ${(props) => props.theme.spaces.xxxs} ${(props) => props.theme.spaces.xs};
    ${(props) =>
      props.isActive
        ? `
        &:after {
            content: '';
            position: absolute;
            width: 5px;
            height:100%;
            top:0;
            right: ${props.theme.spaces.xxs};
            bottom: 0;
            background: ${props.theme.colors.menuActiveItem};
        }
      `
        : ''}
  }
`;

export default DropdownItem;
