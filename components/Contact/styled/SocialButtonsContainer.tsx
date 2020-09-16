import styled from 'styled-components';

const SocialButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;

  > * {
    margin-right: ${(props) => props.theme.spaces.s};
  }
`;

export default SocialButtonsContainer;
