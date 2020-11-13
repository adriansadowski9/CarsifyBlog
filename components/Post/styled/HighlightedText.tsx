import styled from 'styled-components';

const HighlightedText = styled.p`
  width: 100%;
  text-align: justify;
  font-size: ${(props) => props.theme.fontSizes.l};
  color: ${(props) => props.theme.colors.text};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin-bottom: ${(props) => props.theme.spaces.xs};

  a {
    overflow-wrap: break-word;
    word-wrap: break-word;
    text-decoration: none;
    color: ${(props) => props.theme.colors.seeAlsoLink};
    font-style: italic;
  }

  a:hover {
    text-decoration: underline;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    font-size: ${(props) => props.theme.fontSizes.xl};
  }
`;

export default HighlightedText;
