import styled from 'styled-components';

const AdsSection = styled.section<{ indexPage?: boolean }>`
  display: grid;
  column-gap: 20px;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    grid-template-columns: ${(props) => (props.indexPage ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)')};
  }
`;

export default AdsSection;
