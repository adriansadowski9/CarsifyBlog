import styled from 'styled-components'

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${props => props.theme.spaces.xxxl};
`

export default Navigation
