import styled from 'styled-components';

const SocialButtonsContainer = styled.div`
  display: none;
  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    display: flex;
    flex-direction: row;
    > * {
      margin-right: ${(props) => props.theme.spaces.s};
    }
  }
`;

export default SocialButtonsContainer;
