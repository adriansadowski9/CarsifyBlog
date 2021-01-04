import styled from 'styled-components';

const SingleIconWrapper = styled.div<{ backgroundColorProps: string }>`
  background: ${(props) => props.backgroundColorProps};
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    &:hover {
      cursor: pointer;
    }
    opacity: 1;
  }
`;
export default SingleIconWrapper;
