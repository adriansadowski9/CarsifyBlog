import styled from 'styled-components'

const InformationSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${props => props.theme.spaces.m};
  
  @media only screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    width: 400px;
  }
`

export default InformationSection
