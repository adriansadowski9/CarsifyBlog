import styled from 'styled-components';

const Subheading = styled.p`
  width: 100%;
  text-align: left;
  font-size: ${(props) => props.theme.fontSizes.s};
  color: ${(props) => props.theme.colors.subtitleText};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin: 0 auto;
  margin-bottom: ${(props) => props.theme.spaces.l};

  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    width: 600px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    text-align: center;
    width: 800px;
  }
`;

export default Subheading;
