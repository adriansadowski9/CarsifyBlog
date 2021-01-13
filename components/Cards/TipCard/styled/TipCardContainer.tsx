import styled from 'styled-components';

const TipCardContainer = styled.a<{ smallerCard: boolean }>`
  position: relative;
  width: 100%;
  height: ${(props) => (props.smallerCard ? '390px' : '443px')};
  margin-bottom: ${(props) => props.theme.spaces.m};
  text-decoration: none;
  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    width: 400px;
    cursor: pointer;
  }
`;

export default TipCardContainer;
