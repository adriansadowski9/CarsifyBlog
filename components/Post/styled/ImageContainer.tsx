import styled from 'styled-components';

const ImageContainer = styled.div<{ notFullWidth: boolean }>`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;

  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    left: 0;
    height: 300px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    height: 450px;
    width: ${(props) => (props.notFullWidth ? '800px' : '100%')};
    display: flex;
    justify-content: flex-end;
  }
`;

export default ImageContainer;
