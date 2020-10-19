import styled from 'styled-components';

const InputWrapper = styled.div<{ gridColumn?: string; gridArea?: string }>`
  position: relative;
  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    grid-area: ${(props) => props.gridArea};
    grid-column: ${(props) => props.gridColumn};
  }
`;

export default InputWrapper;
