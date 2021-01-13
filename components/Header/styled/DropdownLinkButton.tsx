import styled from 'styled-components';

const DropdownLinkButton = styled.a<{ isActive: boolean }>`
  width: 100%;
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  background: transparent;
  border: none;
  outline: 0;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.spaces.s};
  text-align: left;
  ${(props) =>
    props.isActive
      ? `
    &:after {
        content: '';
        position: absolute;
        width: 5px;
        height: 100%;
        top: 0;
        left:0;
        bottom: 0;
        background: ${props.theme.colors.menuActiveItem};
    }
  `
      : ''}
  &:hover {
    cursor: pointer;
  }
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    display: flex;
    margin: 0;
    padding: ${(props) => props.theme.spaces.s};
    font-size: ${(props) => props.theme.fontSizes.l};
    padding-left: ${(props) => props.theme.spaces.xl};
    :hover {
      background-color: ${(props) => props.theme.colors.mobileMenuBorderBottom};
    }
    &:after {
      width: 0;
    }
  }
`;

export default DropdownLinkButton;
