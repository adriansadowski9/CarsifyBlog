import styled from 'styled-components';

const InformationCardContainer = styled.article`
  position: relative;
  width: 100%;
  height: 239px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    cursor: pointer;
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    width: 400px;
  }
`;

export default InformationCardContainer;
