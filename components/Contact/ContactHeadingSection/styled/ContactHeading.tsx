import styled from 'styled-components';

const ContactHeading = styled.h2`
  margin: ${(props) => props.theme.spaces.xxxs} 0;
  font-size: ${(props) => props.theme.fontSizes.xxl};
  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    font-size: ${(props) => props.theme.fontSizes.xxxl};
  }
`;

export default ContactHeading;
