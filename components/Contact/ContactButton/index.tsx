import * as React from 'react';

import ButtonText from '@components/Contact/ContactButton/ButtonText';
import SocialLink from '@components/Contact/ContactButton/SocialLink';
interface ButtonProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  text: string;
  Icon?: React.ReactElement;
  type?: 'submit' | 'reset' | 'button';
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
  link?: string;
}

const Button: React.FC<ButtonProps> = ({
  height = '60px',
  width = '206px',
  backgroundColor,
  text,
  Icon,
  type,
  link,
}) => {
  return (
    <SocialLink href={link} backgroundColor={backgroundColor} type={type}>
      <ButtonText>{text}</ButtonText>
    </SocialLink>
  );
};

export default Button;
