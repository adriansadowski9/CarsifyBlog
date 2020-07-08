import styled from 'styled-components'

const LogoWrapper = styled.div`
  width: 180px;
  height: 60px;
  svg {
    .apply-fill {
      fill: ${props => props.theme.colors.text};
    }
  }
`

export default LogoWrapper
