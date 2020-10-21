import InputComponent from './InputComponent';
import InputLabel from './InputLabel';
import InputWrapper from './InputWrapper';

import * as React from 'react';

interface InputProps {
  height?: string;
  name?: string;
  label?: string;
  textarea?: boolean;
  gridColumn?: string;
  register: any;
  onChange: (e: { target: { name: string; value: string } }) => void;
}

const Input: React.FC<InputProps> = ({
  height = '72px',
  name,
  label,
  textarea,
  gridColumn,
  register,
  onChange,
}) => {
  return (
    <InputWrapper gridColumn={gridColumn} gridArea={name}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <InputComponent
        as={textarea ? 'textarea' : 'input'}
        height={!textarea ? height : '150px'}
        name={name}
        id={name}
        textarea={textarea}
        ref={register}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

export default Input;
