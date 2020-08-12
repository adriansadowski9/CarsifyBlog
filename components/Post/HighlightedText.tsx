import styled from 'styled-components'

const HighlightedText = styled.p`
  width: 100%;
  text-align: justify;
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights.medium};
  margin-bottom: ${props => props.theme.spaces.xs};
`

export default HighlightedText
