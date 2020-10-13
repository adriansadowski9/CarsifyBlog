import styled from 'styled-components';

const ContentsListItem = styled.li`
  padding-left: ${(props) => props.theme.spaces.m};
  margin-bottom: ${(props) => props.theme.spaces.xxxs};
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 10px;
    height: 5px;
    background: ${(props) => props.theme.colors.contentsList};
  }

  a {
    color: ${(props) => props.theme.colors.shareSection};
    font-size: ${(props) => props.theme.fontSizes.l};
    text-decoration: none;
  }

  a:visited {
    color: ${(props) => props.theme.colors.contentsList};
  }

  a:hover {
    text-decoration: underline;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export default ContentsListItem;
