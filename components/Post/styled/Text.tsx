import styled from 'styled-components';

const Text = styled.div`
  width: 100%;
  text-align: justify;
  font-size: ${(props) => props.theme.fontSizes.m};
  color: ${(props) => props.theme.colors.text};
  margin-top: ${(props) => props.theme.spaces.xs};
  word-wrap: break-word;

  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    font-size: ${(props) => props.theme.fontSizes.l};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: ${(props) => props.theme.spaces.l} 0 ${(props) => props.theme.spaces.xs} 0;
  }

  h1 {
    font-size: ${(props) => props.theme.fontSizes.xxxl};
  }

  h2 {
    font-size: ${(props) => props.theme.fontSizes.xxl};
  }

  h3 {
    font-size: ${(props) => props.theme.fontSizes.xl};
  }

  h4,
  h5,
  h6 {
    font-size: ${(props) => props.theme.fontSizes.m};
  }

  p {
    margin: ${(props) => props.theme.spaces.xs} 0;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.seeAlsoLink};
    font-style: italic;
  }

  a:hover {
    text-decoration: underline;
  }

  * {
    max-width: 100%;
  }

  .see-also {
    position: relative;
    padding-left: ${(props) => props.theme.spaces.s};
    margin: ${(props) => props.theme.spaces.xs} 0;
    text-align: left;

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
