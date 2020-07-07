import styled from 'styled-components'

const TipCardTitle = styled.h3`
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.l};
  color: ${props => props.theme.colors.tipText};
  margin-top: 0;
  margin-bottom: ${props => props.theme.spaces.xxs};
`

export default TipCardTitle
