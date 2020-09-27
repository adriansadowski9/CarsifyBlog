import styled from 'styled-components';

const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  z-index: 999;
  height: 90px;
  &:hover {
    cursor: pointer;
  }
`;

export default LogoWrapper;
