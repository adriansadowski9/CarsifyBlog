import styled from 'styled-components'

const TextContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: ${props => props.theme.spaces.s};
  
  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    width: 700px;
  }
  
  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    width: 994px;
  }
`

export default TextContainer
