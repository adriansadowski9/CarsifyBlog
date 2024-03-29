import styled from 'styled-components';

const MoreSectionTitle = styled.h2<{ isMore: boolean }>`
  ${(props) => (!props.isMore ? 'display: none;' : '')}
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.moreSection};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin-top: 0;
  margin-bottom: ${(props) => props.theme.spaces.s};
  padding-left: ${(props) => props.theme.spaces.s};
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: ${(props) => props.theme.colors.moreSection};
    height: 100%;
    width: 5px;
  }
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    grid-column: 1/3;
  }
  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    grid-column: 1/5;
  }
`;

export default MoreSectionTitle;
