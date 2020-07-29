import styled from 'styled-components'

const ArticleImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    height: 300px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    height: 450px;
  }
`

export default ArticleImage
