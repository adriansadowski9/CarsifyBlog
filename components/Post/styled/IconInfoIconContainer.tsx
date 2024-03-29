import styled from 'styled-components';

const IconInfoIconContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.iconInfoBg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${(props) => props.theme.spaces.xs};
`;

export default IconInfoIconContainer;
