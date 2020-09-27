import styled from 'styled-components';

const SnowballDiv = styled.div<{ isOpen }>`
  width: ${(props) => (props.isOpen ? '1200px' : '0')};
  height: ${(props) => (props.isOpen ? '1200px' : '0')};
  position: absolute;
  top: ${(props) => (props.isOpen ? '-560px' : '35px')};
  left: ${(props) => (props.isOpen ? '-565px' : '36px')};
  border-radius: 50%;
  background: gray;
  opacity: 1;
  transition: ${(props) =>
    props.isOpen
      ? 'all 4000ms cubic-bezier(0.000, 0.995, 0.990, 1.000)'
      : 'all 3000ms cubic-bezier(0, 0.995, 0.99, 1)'};
`;
export default SnowballDiv;
