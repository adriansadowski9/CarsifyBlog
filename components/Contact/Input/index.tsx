import ErrorSpan from './ErrorSpan';
import InputComponent from './InputComponent';
import InputLabel from './InputLabel';
import InputWrapper from './InputWrapper';
import LabelWrapper from './LabelWrapper';

import * as React from 'react';

interface InputProps {
  height?: string;
  name?: string;
  label?: string;
  textarea?: boolean;
  gridColumn?: string;
  register: (e: {
    target: { required: string; pattern?: { value: string; message: string } };
  }) => void;
  onChange: (e: { target: { name: string; value: string } }) => void;
  error: string;
}

const Input: React.FC<InputProps> = ({
  height = '72px',
  name,
  label,
  textarea,
  gridColumn,
  register,
  onChange,
  error,
}) => {
  return (
    <InputWrapper gridColumn={gridColumn} gridArea={name}>
      <LabelWrapper>
        <InputLabel htmlFor={name}>{label}</InputLabel>
        {error && <ErrorSpan>{error}</ErrorSpan>}
      </LabelWrapper>
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
