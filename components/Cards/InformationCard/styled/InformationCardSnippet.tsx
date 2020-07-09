import styled from 'styled-components'

const InformationCardSnippet = styled.p`
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.informationText};
  margin: 0 0 ${props => props.theme.spaces.xxs} 0;
  text-align: right;
`

export default InformationCardSnippet
