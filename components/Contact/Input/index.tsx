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
  register: React.Ref<HTMLInputElement>;
  onChange: (e: { target: { name: string; value: string } }) => void;
  error: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  height = '72',
  name,
  label,
  textarea,
  gridColumn,
  register,
  onChange,
  error,
  type,
}) => {
  return (
    <InputWrapper gridColumn={gridColumn} gridArea={name}>
      <LabelWrapper>
        <InputLabel htmlFor={name}>{label}</InputLabel>
        {error && <ErrorSpan>{error}</ErrorSpan>}
      </LabelWrapper>
      <InputComponent
        as={textarea ? 'textarea' : 'input'}
        customHeight={!textarea ? height : '150'}
        name={name}
        type={type}
        id={name}
        textarea={textarea}
        ref={register}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

export default Input;
