import styled from 'styled-components';

const ShareSectionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: ${(props) => props.theme.spaces.xxs};

  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    flex-direction: row;
    margin-bottom: ${(props) => props.theme.spaces.xs};
  }
`;

export default ShareSectionTextContainer;
