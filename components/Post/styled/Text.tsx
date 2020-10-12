import styled from 'styled-components';

const Text = styled.div`
  width: 100%;
  text-align: justify;
  font-size: ${(props) => props.theme.fontSizes.m};
  color: ${(props) => props.theme.colors.text};
  margin-top: ${(props) => props.theme.spaces.xs};
  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    font-size: ${(props) => props.theme.fontSizes.l};
  }

  h1 {
    font-size: ${(props) => props.theme.fontSizes.xxxl};
    margin: ${(props) => props.theme.spaces.l} 0 ${(props) => props.theme.spaces.xs} 0;
  }

  h2 {
    font-size: ${(props) => props.theme.fontSizes.xxl};
    margin: ${(props) => props.theme.spaces.l} 0 ${(props) => props.theme.spaces.xs} 0;
  }

  h3 {
    font-size: ${(props) => props.theme.fontSizes.xl};
    margin: ${(props) => props.theme.spaces.l} 0 ${(props) => props.theme.spaces.xs} 0;
  }

  h4,
  h5,
  h6 {
    font-size: ${(props) => props.theme.fontSizes.m};
    margin: ${(props) => props.theme.spaces.l} 0 ${(props) => props.theme.spaces.xs} 0;
  }

  p {
    margin: ${(props) => props.theme.spaces.xxxs} 0;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.seeAlsoLink};
    font-style: italic;
  }

  a:hover {
    text-decoration: underline;
  }

  .see-also {
    position: relative;
    padding-left: ${(props) => props.theme.spaces.s};
    margin: ${(props) => props.theme.spaces.xs} 0;

    a {
      font-weight: ${(props) => props.theme.fontWeights.medium};
    }

    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 5px;
      height: 100%;
      background: ${(props) => props.theme.colors.seeAlsoBar};
    }
  }
`;

export default Text;
