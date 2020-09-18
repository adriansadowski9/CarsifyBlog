import styled from 'styled-components';

const CarDataBox = styled.div`
  width: 70%;
  max-width: 380px;
  position: absolute;
  top: calc(100% - 40px);
  left: 30px;
  background: ${(props) => props.theme.colors.adCarBoxBg};
  color: ${(props) => props.theme.colors.adCarBoxText};
  padding: ${(props) => props.theme.spaces.l};
  z-index: 2;
  @media screen and (min-width: 768px) {
    left: 72px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    width: 520px;
    max-width: 520px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
`;

export default CarDataBox;
