import styled from 'styled-components'

const ArticlesSection = styled.section`
  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    margin-right: ${props => props.theme.spaces.xl};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

export default ArticlesSection
