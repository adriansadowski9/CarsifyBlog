import styled from 'styled-components';

const ContactButton = styled.button<{ bgColor; sizeW; sizeH }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.bgColor};
  color: ${(props) => props.theme.colors.socialBoxBg};
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSizes.l};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  border: none;
  width: ${(props) => props.sizeW};
  height: ${(props) => props.sizeH};

  &:hover {
    cursor: pointer;
  }

  > * {
    margin-right: ${(props) => props.theme.spaces.xxs};
  }
  :last-of-type {
    margin: 0;
  }
`;

export default ContactButton;
