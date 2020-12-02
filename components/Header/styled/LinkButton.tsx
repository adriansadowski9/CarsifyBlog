import styled from 'styled-components';

const LinkButton = styled.a<{ isActive?: boolean }>`
  width: 100%;
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.l};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  background: transparent;
  border: none;
  outline: 0;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 20px;
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
    height: 90px;
    line-height: 90px;
    padding: 0 ${(props) => props.theme.spaces.m};

    ${(props) =>
      props.isActive
        ? `
    &:after {
        width: calc(100% - 2 * ${props.theme.spaces.xxl});
        height: 5px;
        top: unset;
        right: unset;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
    }
  `
        : ''}
  }
`;

export default LinkButton;
