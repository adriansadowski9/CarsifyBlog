import styled from 'styled-components'

const TipsSection = styled.section`
  display: flex;
  flex-direction: column;
  
  @media only screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  @media only screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

export default TipsSection
