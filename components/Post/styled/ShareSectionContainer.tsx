import styled from 'styled-components';

const ShareSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: ${(props) => props.theme.spaces.xs};
  margin-bottom: ${(props) => props.theme.spaces.l};
  padding-right: ${(props) => props.theme.spaces.s};
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    background: ${(props) => props.theme.colors.moreSection};
    height: 100%;
    width: 5px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    margin-top: ${(props) => props.theme.spaces.l};
  }
`;

export default ShareSectionContainer;
