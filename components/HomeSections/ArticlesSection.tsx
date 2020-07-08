import styled from 'styled-components'

const ArticlesSection = styled.section`
  display: flex;
  flex-direction: column;
  
  @media only screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-right: ${props => props.theme.spaces.xl};
  }
`

export default ArticlesSection
