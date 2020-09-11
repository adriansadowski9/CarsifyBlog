import styled from 'styled-components'

const IconInfoIconContainer = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${props => props.theme.colors.iconInfoBg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${props => props.theme.spaces.xs};
  
  svg {
    width: 12px;
    height: 12px;
    fill: ${props => props.theme.colors.iconInfoIcon}
  }
`

export default IconInfoIconContainer
