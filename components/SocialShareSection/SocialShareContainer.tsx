import styled from 'styled-components';

const SocialShareContainer = styled.div<{
  isAbsolute: boolean;
  horizontal: boolean;
  rightSide: boolean;
}>`
  ${(props) =>
    props.isAbsolute
      ? `
  position: absolute;
  top: 50%;
  ${props.rightSide ? `right: ${props.theme.spaces.l}` : `left: ${props.theme.spaces.l}`}; 
  transform: translateY(-50%);
  `
      : ''}
  width: ${(props) => (props.horizontal ? '150px' : '40px')};
  height: ${(props) => (props.horizontal ? '40px' : '150px')};
  padding: ${(props) =>
    props.horizontal ? `0 ${props.theme.spaces.xs}` : `${props.theme.spaces.xs} 0`};
  box-shadow: 0px 0px 5px 0px rgba(204, 212, 218, 0.5);
  display: flex;
  flex-direction: ${(props) => (props.horizontal ? 'row' : 'column')};
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.socialBoxBg};
  border-radius: 20px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    ${(props) =>
      props.isAbsolute
        ? `
    ${props.rightSide ? `right: ${props.theme.spaces.l}` : `left: ${props.theme.spaces.l}`};
    `
        : ''}
  }
`;

export default SocialShareContainer;
