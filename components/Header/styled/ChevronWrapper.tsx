import styled from 'styled-components';

const ChevronWrapper = styled.div`
  position: absolute;
  left: 25px;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    display: none;
    visibility: hidden;
  }
`;

export default ChevronWrapper;
