import * as React from 'react';

import ErrorButton from '@components/Error/styled/ErrorButton';
import ErrorContainer from '@components/Error/styled/ErrorContainer';
import ErrorHeading from '@components/Error/styled/ErrorHeading';
import ErrorText from '@components/Error/styled/ErrorText';

interface ErrorProps {
  heading: string;
  text: string;
  buttonText: string;
  buttonAction: () => void;
}

const Error: React.FC<ErrorProps> = ({ heading, text, buttonText, buttonAction }) => (
  <ErrorContainer>
    <ErrorHeading>{heading}</ErrorHeading>
    <ErrorText>{text}</ErrorText>
    <ErrorButton onClick={buttonAction}>{buttonText}</ErrorButton>
  </ErrorContainer>
);

export default Error;
