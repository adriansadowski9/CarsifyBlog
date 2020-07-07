import styled from 'styled-components'

const AdsSection = styled.section`
  display: flex;
  flex-direction: column;
  
  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

export default AdsSection
