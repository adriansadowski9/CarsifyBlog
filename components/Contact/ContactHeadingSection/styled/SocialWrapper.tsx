import styled from 'styled-components';

const SocialWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  margin-bottom: ${(props) => props.theme.spaces.l};
`;

export default SocialWrapper;
