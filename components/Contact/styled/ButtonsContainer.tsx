import styled from 'styled-components';

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default ButtonsContainer;
