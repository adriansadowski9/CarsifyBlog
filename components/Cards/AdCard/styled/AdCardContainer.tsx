import styled from 'styled-components';

const AdCardContainer = styled.a<{ enlargedCard: boolean }>`
  position: relative;
  width: 100%;
  margin-bottom: ${(props) => props.theme.spaces.m};
  text-decoration: none;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    width: 400px;
    height: ${(props) => (props.enlargedCard ? '390px' : 'auto')};
    cursor: pointer;
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    ${(props) =>
      !props.enlargedCard
        ? `
    width: 300px;`
        : ''}
  }
`;

export default AdCardContainer;
