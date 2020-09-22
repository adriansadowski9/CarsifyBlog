import styled from 'styled-components';

const GroupInputs = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: ${(props) => props.theme.spaces.m};
`;
export default GroupInputs;
