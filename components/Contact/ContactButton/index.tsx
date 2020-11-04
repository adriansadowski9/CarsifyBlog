import * as React from 'react';

import ButtonText from '@components/Contact/ContactButton/ButtonText';
import ButtonWrapper from '@components/Contact/ContactButton/ButtonWrapper';
import Icon from '@components/Icon';
import IconName from '@utils/iconNames';

interface ButtonProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  text: string;
  iconName?: IconName;
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
  iconName,
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
      customWidth={width}
      customHeight={height}
    >
      {iconName && (
        <Icon
          iconName={iconName}
          variant={iconFill ? 'flat' : 'color'}
          width="24px"
          height="24px"
          fill={iconFill}
        />
      )}
      <ButtonText buttonHasIcon={!!Icon}>{text}</ButtonText>
    </ButtonWrapper>
  );
};

export default Button;
