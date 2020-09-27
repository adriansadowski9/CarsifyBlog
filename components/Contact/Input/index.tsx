import InputComponent from './InputComponent';
import InputLabel from './InputLabel';
import InputWrapper from './InputWrapper';

import * as React from 'react';

interface InputProps {
  width?: string;
  height?: string;
  name?: string;
  label?: string;
  textarea?: boolean;
}

const Input: React.FC<InputProps> = ({ width, height = '72px', name, label, textarea }) => {
  return (
    <InputWrapper>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <InputComponent
        as={textarea ? 'textarea' : 'input'}
        width={width}
        height={!textarea ? height : '150px'}
        name={name}
        id={name}
      />
    </InputWrapper>
  );
};

export default Input;
