import styled from 'styled-components'

const ShareSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: ${props => props.theme.spaces.l};
  padding-right: ${props => props.theme.spaces.s};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    background: ${props => props.theme.colors.moreSection};
    height: 100%;
    width: 5px;
  }
`

export default ShareSectionContainer
