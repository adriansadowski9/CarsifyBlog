import styled from 'styled-components';

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: ${(props) => props.theme.spaces.l};
  box-shadow: 0px 0px 5px #ccd4da80;
  width: 150px;
  padding: ${(props) => props.theme.spaces.xxxs};
`;

export default IconsWrapper;
