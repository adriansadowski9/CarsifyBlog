import styled from 'styled-components';

const SocialButton = styled.button`
  display: flex;
  align-items: center;
  height: 19.5px;
  width: 24px;
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
  background: transparent;
  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    outline: 1;
  }
`;

export default SocialButton;
