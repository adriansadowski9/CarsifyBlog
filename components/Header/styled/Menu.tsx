import styled from 'styled-components'

const Menu = styled.div<{isOpen}>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh - 90px);
  background: ${props => props.theme.colors.bg};
  display: ${props => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  
  @media only screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    position: static;
    display: flex;
    width: auto;
    height: 90px;
    flex-direction: row;
  }
`

export default Menu
