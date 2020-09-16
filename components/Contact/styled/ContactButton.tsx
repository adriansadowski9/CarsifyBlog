import styled from 'styled-components';

const ContactButton = styled.button<{ bgColor }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.bgColor};
  color: ${(props) => props.theme.colors.socialBoxBg};
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSizes.l};
  border: none;
  width: 206px;
  height: 60px;

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
