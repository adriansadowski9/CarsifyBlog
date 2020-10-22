import styled from 'styled-components';

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: ${(props) => props.theme.spaces.s};
  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    margin-top: ${(props) => props.theme.spaces.xl};
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default ButtonsContainer;
