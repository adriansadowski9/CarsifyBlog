import styled from 'styled-components';

const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.spaces.l};
`;

export default SocialWrapper;
