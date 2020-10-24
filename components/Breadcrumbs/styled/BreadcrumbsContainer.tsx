import styled from 'styled-components';

const BreadcrumbsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: ${(props) => props.theme.spaces.xxs};

  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    justify-content: center;
  }
`;

export default BreadcrumbsContainer;
