import styled from 'styled-components';

import { AlertType } from '@components/Alert';

type AlertContainerProps = {
  type: AlertType;
};

const AlertContainer = styled.div<AlertContainerProps>`
  width: 100%;
  padding: ${(props) => props.theme.spaces.xs} ${(props) => props.theme.spaces.s};
  margin-bottom: ${(props) => props.theme.spaces.m};
  background: ${(props) =>
    props.type === 'success' ? props.theme.colors.alertSuccessBg : props.theme.colors.alertErrorBg};
  color: ${(props) =>
    props.type === 'success'
      ? props.theme.colors.alertSuccessText
      : props.theme.colors.alertErrorText};
`;

export default AlertContainer;
