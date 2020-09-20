import * as React from 'react';

import ButtonText from '@components/Contact/ContactButton/ButtonText';
import ButtonWrapper from '@components/Contact/ContactButton/ButtonWrapper';
interface ButtonProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  text: string;
  Icon?: React.ReactElement;
  type?: 'submit' | 'reset' | 'button';
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  height = '60px',
  width = '206px',
  backgroundColor,
  text,
  Icon,
  type,
}) => {
  return (
    <ButtonWrapper width={width} height={height} backgroundColor={backgroundColor} type={type}>
      <ButtonText>{text}</ButtonText>
    </ButtonWrapper>
  );
};

export default Button;
