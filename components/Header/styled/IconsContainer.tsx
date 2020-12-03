import styled from 'styled-components';

const IconsContainer = styled.div`
  display: flex;
  align-self: flex-end;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    opacity: 0;
    visibility: hidden;
    display: none;
  }
`;

export default IconsContainer;
