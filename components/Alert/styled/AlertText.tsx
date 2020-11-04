import styled from 'styled-components';

type AlertTextProps = {
  type: 'heading' | 'message';
};

const AlertText = styled.p<AlertTextProps>`
  ${(props) =>
    props.type === 'heading'
      ? `
    font-size: ${props.theme.fontSizes.m};
    font-weight: ${props.theme.fontWeights.medium};
    margin-top: 0;
    margin-bottom: ${props.theme.spaces.xxxs};
    text-transform: uppercase;
  `
      : `
    font-size: ${props.theme.fontSizes.s};
    margin: 0;
  `}
`;

export default AlertText;
