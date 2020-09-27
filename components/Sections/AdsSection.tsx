import styled from 'styled-components';

const AdsSection = styled.section`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }
`;

export default AdsSection;
