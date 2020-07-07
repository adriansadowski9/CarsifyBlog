import styled from 'styled-components'

const CategoryIconContainer = styled.div<{backgroundColor: string, iconColor: string}>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${props => props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 12px;
    height: 12px;
    fill: ${props => props.iconColor}
  }
`

export default CategoryIconContainer
