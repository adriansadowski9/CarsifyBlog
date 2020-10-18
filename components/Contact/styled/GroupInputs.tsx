import styled from 'styled-components';

const GroupInputs = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    grid-template-columns: repeat(24, 1fr);
    grid-template-areas:
      'name email '
      'category topic '
      'message . ';
    grid-gap: 30px;
  }
`;
export default GroupInputs;
