import styled from 'styled-components'

const NavListItem = styled.li<{isActive: boolean}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => props.theme.spaces.s};
  
  ${props => props.isActive ? `
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
    ` : ''}
  
  @media only screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    display: block;
    margin: 0;
    ${props => props.isActive ? `
      &:after {
          width: calc(100% - 3 * ${props.theme.spaces.xxl});
          height: 5px;
          top: unset;
          right: unset;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
      }
    ` : ''}
  }
`

export default NavListItem
