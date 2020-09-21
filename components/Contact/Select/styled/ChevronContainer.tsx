import styled from 'styled-components';

const ChevronContainer = styled.div<{ isOpen: boolean }>`
  transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'none')};
  transition: transform 0.3s;
  fill: ${(props) => props.theme.colors.text};
`;

export default ChevronContainer;
