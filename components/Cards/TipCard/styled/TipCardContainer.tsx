import styled from 'styled-components'

const TipCardContainer = styled.article`
  position: relative;
  width: 100%;
  margin-bottom: ${props => props.theme.spaces.m};
  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    width: 400px;
    cursor: pointer;
  }
`

export default TipCardContainer
