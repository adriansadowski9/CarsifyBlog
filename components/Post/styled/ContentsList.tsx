import styled from 'styled-components';

const ContentsList = styled.ul`
  counter-reset: contents-counter;
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-left: ${(props) => props.theme.spaces.s};
`;

export default ContentsList;
