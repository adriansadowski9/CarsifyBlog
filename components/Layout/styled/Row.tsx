import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  flex-direction: column;
  
  @media only screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    flex-direction: row;
  }
`

export default Row
