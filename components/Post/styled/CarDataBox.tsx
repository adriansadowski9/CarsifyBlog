import styled from 'styled-components';

const CarDataBox = styled.div`
  width: 70%;
  max-width: 380px;
  position: absolute;
  top: calc(100% - (2 * ${(props) => props.theme.spaces.s}));
  left: ${(props) => props.theme.spaces.s};
  background: ${(props) => props.theme.colors.adCarBoxBg};
  color: ${(props) => props.theme.colors.adCarBoxText};
  padding: ${(props) => props.theme.spaces.xs} ${(props) => props.theme.spaces.s};
  z-index: 2;

  @media screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    padding: ${(props) => props.theme.spaces.l};
    width: 520px;
    max-width: 520px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
`;

export default CarDataBox;
