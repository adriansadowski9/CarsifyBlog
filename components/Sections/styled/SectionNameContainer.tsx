import styled from 'styled-components';

const SectionNameContainer = styled.div<{ gridColumn?: string }>`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.spaces.m};
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    width: 100%;
    height: 1px;
    background: ${(props) => props.theme.colors.border};
  }
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    grid-column: 1/3;
  }
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    grid-column: ${(props) => props.gridColumn};
  }
`;

export default SectionNameContainer;
