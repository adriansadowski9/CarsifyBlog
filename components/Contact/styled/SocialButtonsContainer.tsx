import styled from 'styled-components';

const SocialButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    margin-top: ${(props) => props.theme.spaces.s};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    flex-direction: row;
    > * {
      margin-right: ${(props) => props.theme.spaces.s};
    }
  }
`;

export default SocialButtonsContainer;
