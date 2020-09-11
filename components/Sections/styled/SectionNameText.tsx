import styled from 'styled-components'

const SectionNameText = styled.p`
  margin: 0;
  color: ${props => props.theme.colors.sectionText};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.medium};
  text-transform: uppercase;
  padding: 0 ${props => props.theme.spaces.xs};
  background: ${props => props.theme.colors.bg};
  z-index: 1;
`

export default SectionNameText
