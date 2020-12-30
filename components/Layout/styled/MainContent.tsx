import styled from 'styled-components';

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 ${(props) => props.theme.spaces.s};
  margin-bottom: ${(props) => props.theme.spaces.m};

  @media only screen and (max-width: 320px) {
    display: grid;
    grid-template-columns: 280px;
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    padding: 0 ${(props) => props.theme.spaces.xxs};
    margin: 0 auto;
    margin-top: ${(props) => props.theme.spaces.m};
    margin-bottom: ${(props) => props.theme.spaces.m};
    max-width: 840px;
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    padding: 0;
    max-width: 1260px;
  }
`;

export default MainContent;
