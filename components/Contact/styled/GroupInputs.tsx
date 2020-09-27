import styled from 'styled-components';

const GroupInputs = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: ${(props) => props.theme.spaces.m};
  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    flex-direction: row;
  }
`;
export default GroupInputs;
