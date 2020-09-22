import * as React from 'react';

import ButtonText from '@components/Contact/ContactButton/ButtonText';
import ButtonWrapper from '@components/Contact/ContactButton/ButtonWrapper';

interface ButtonProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  text: string;
  Icon?: React.FC<{ fill?: string; width?: string; height?: string }>;
  iconFill?: string;
  type?: 'submit' | 'reset' | 'button';
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
  link?: string;
}

const Button: React.FC<ButtonProps> = ({
  height,
  width,
  backgroundColor,
  text,
  Icon,
  iconFill,
  type,
  link,
}) => {
  return (
    <ButtonWrapper
      as={!link ? 'button' : 'a'}
      href={link}
      backgroundColor={backgroundColor}
      type={type}
      width={width}
      height={height}
    >
      {Icon && <Icon width="24px" height="24px" fill={iconFill} />}
      <ButtonText buttonHasIcon={!!Icon}>{text}</ButtonText>
    </ButtonWrapper>
  );
};

export default Button;
