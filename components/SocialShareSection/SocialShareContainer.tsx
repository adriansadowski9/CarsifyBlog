import styled from 'styled-components'

const SocialShareContainer = styled.div<{ isAbsolute: boolean, rightSide: boolean, horizontal: boolean }>`
  ${props => props.isAbsolute ? `
  position: absolute;
  top: 50%;
  ${props.rightSide ? `right: ${props.theme.spaces.l}` : `left: ${props.theme.spaces.l}`}; 
  transform: translateY(-50%);
  ` : ''}
  width: ${props => props.horizontal ? '150px' : '40px'};
  height: ${props => props.horizontal ? '40px' : '150px'};
  box-shadow: 0px 0px 5px 0px rgba(204,212,218,0.5);
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${props => props.theme.colors.socialBoxBg};
  border-radius: 20px;
`

export default SocialShareContainer
