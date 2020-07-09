import styled from 'styled-components'

const TipsSection = styled.section<{isHorizontal: boolean, notEnoughItems: boolean}>`
  display: flex;
  flex-direction: column;
  
  @media only screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  @media only screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    ${props => props.isHorizontal ? '' : `
      flex-direction: column;
      justify-content: flex-start;
    `}
    ${props => props.notEnoughItems ?
      `&::after {
              content: "";
              flex: auto;
              max-width: 400px;
       }` : ''
    }
  }
`

export default TipsSection
