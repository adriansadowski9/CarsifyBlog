import styled from 'styled-components';

const SelectSpan = styled.span`
  position: absolute;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.text};
  width: 100%;
  text-transform: uppercase;
  &:hover {
    cursor: default;
  }
`;

export default SelectSpan;
