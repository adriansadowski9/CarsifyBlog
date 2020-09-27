import styled from 'styled-components';

const SnowballDiv = styled.div<{ isOpen }>`
  width: ${(props) => (props.isOpen ? '1200px' : '0')};
  height: ${(props) => (props.isOpen ? '1800px' : '0')};
  position: absolute;
  top: ${(props) => (props.isOpen ? '-560px' : '35px')};
  right: ${(props) => (props.isOpen ? '-565px' : '80px')};
  border-radius: 50%;
  background: #fff;
  opacity: 1;
  transition: ${(props) =>
    props.isOpen
      ? 'all 1000ms cubic-bezier(0, 0.99, 0.99, 1)'
      : 'all 2000ms cubic-bezier(0, 0.995, 0.99, 1)'};
  z-index: 995;
`;
export default SnowballDiv;
