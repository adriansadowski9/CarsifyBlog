import styled from 'styled-components';

const DropdownLinkButton = styled.a<{ isActive: boolean }>`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.l};
  text-decoration: none;
  position: relative;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    padding: ${(props) => props.theme.spaces.xxs} ${(props) => props.theme.spaces.xs};
    justify-content: flex-start;
    width: 100%;
    font-size: ${(props) => props.theme.fontSizes.m};
    &:hover {
      font-weight: ${(props) => props.theme.fontWeights.bold};
    }
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

export default DropdownLinkButton;
