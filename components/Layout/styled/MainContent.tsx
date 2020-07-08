import styled from 'styled-components'

const MainContent = styled.main`
  padding: 0 ${props => props.theme.spaces.s};
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  
  @media only screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    padding: 0 ${props => props.theme.spaces.xxs};
    margin: 0 auto;
    margin-top: calc(90px + ${props => props.theme.spaces.m});
  }
  
  @media only screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    max-width: ${props => props.theme.breakpoints[1]};
  }
`

export default MainContent
