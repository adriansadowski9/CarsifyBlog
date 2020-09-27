import styled from 'styled-components';

const InformationCardImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.informationImageOverlay};
  opacity: 0.5;
`;

export default InformationCardImageOverlay;
