import styled from 'styled-components'

const LinkButton = styled.a`
  height: 90px;
  line-height: 90px;
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.medium};
  padding: 0 ${props => props.theme.spaces.xxl};
  cursor: pointer;
`

export default LinkButton
