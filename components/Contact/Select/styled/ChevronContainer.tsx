import styled from 'styled-components';

const ChevronContainer = styled.div<{ isOpen: boolean }>`
  transform: ${(props) => (props.isOpen ? 'translateY(-4px) rotate(180deg)' : 'none')};
  transition: transform 0.3s;
`;

export default ChevronContainer;
