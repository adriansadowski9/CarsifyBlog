import styled from 'styled-components';

const ContentsListItem = styled.li<{ itemsAmount: number }>`
  padding-left: ${(props) => (props.itemsAmount > 9 ? props.theme.spaces.m : props.theme.spaces.s)};
  position: relative;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    content: counter(contents-counter) '. ';
    counter-increment: contents-counter;
  }

  a {
    color: ${(props) => props.theme.colors.shareSection};
    font-size: ${(props) => props.theme.fontSizes.m};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    text-decoration: none;
  }

  a:visited {
    color: ${(props) => props.theme.colors.contentsList};
  }

  a:hover {
    color: ${(props) => props.theme.colors.text};
  }
`;

export default ContentsListItem;
