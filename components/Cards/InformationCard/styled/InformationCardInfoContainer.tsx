import styled from 'styled-components';

const InformationCardInfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${(props) => props.theme.spaces.s} ${(props) => props.theme.spaces.s}
    ${(props) => props.theme.spaces.xs} ${(props) => props.theme.spaces.s};
`;

export default InformationCardInfoContainer;
