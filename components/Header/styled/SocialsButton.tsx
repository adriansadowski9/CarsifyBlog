import IconsContainer from './IconsContainer';

import styled from 'styled-components';

const SocialsButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  line-height: 0;

  &:focus {
    outline: none;
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    display: block;
    padding: ${(props) => props.theme.spaces.xxxs};
    margin-right: ${(props) => props.theme.spaces.m};

    svg {
      width: 32px;
      height: 32px;
    }
  }
`;

export default SocialsButton;
