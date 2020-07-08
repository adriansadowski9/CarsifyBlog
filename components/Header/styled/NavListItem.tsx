import styled from 'styled-components'

const NavListItem = styled.li<{isActive: boolean}>`
  position: relative;
  
  ${props => props.isActive ? `
    &:after {
        content: '';
        position: absolute;
        width: calc(100% - 3 * ${props.theme.spaces.xxl});
        height: 5px;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0px;
        background: ${props.theme.colors.menuActiveItem};
    }
  ` : ''}
`

export default NavListItem
