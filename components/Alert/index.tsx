import * as React from 'react';

import AlertContainer from '@components/Alert/styled/AlertContainer';
import AlertText from '@components/Alert/styled/AlertText';

export type AlertType = 'success' | 'error';

export type AlertProps = {
  type: AlertType;
  message: {
    heading?: string;
    text: string;
  };
};

const Alert: React.FC<AlertProps> = ({ type, message: { heading, text } }) => (
  <AlertContainer type={type}>
    {heading && (
      <AlertText type="heading" as="h4">
        {heading}
      </AlertText>
    )}
    <AlertText type="message">{text}</AlertText>
  </AlertContainer>
);

export default Alert;
