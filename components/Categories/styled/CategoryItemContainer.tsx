import styled from 'styled-components';

const CategoryItemContainer = styled.li<{ isActive: boolean; isEven: number }>`
  width: 100%;
  height: 40px;
  background: ${(props) =>
    props.isActive ? props.theme.colors.categoryBoxActiveBg : props.theme.colors.categoryBoxBg};
  margin-bottom: ${(props) => props.theme.spaces.xs};
  cursor: pointer;
  &:first-of-type {
    grid-column: ${(props) => (props.isEven === 1 ? 'span 2' : 'span 1')};
  }
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    height: 60px;
  }
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    height: auto;
    flex: 1;
    grid-column: 1;
  }
`;

export default CategoryItemContainer;
