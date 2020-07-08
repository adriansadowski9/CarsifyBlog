import styled from 'styled-components'

const AdCardContainer = styled.article`
  position: relative;
  width: 100%;
  margin-bottom: ${props => props.theme.spaces.m};
  @media only screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    width: 300px;
    cursor: pointer;
  }
`

export default AdCardContainer