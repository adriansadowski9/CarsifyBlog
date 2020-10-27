import styled from 'styled-components';

const AdsSection = styled.section`
  grid-template-columns: 820px;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    grid-column: span 2;
  }
`;

export default AdsSection;
