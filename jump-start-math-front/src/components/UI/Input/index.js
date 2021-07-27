import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core'

import { StyledError, StyledInput, StyledTextArea } from './styles';

const Input = ({ name, type = 'text', ...rest }) => {
  const inputRef = useRef();
  const { error, fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  if (type === 'textarea') {
    return (
      <>
        <StyledTextArea
          ref={inputRef}
          name={name}
          hasError={!!error}
          {...rest}
        />
        {!!error && <StyledError>{error}</StyledError>}
      </>
    );
  }

  return (
    <>
      <StyledInput
        type={type}
        ref={inputRef}
        name={name}
        hasError={!!error}
        {...rest}
      />
      {!!error && <StyledError>{error}</StyledError>}
    </>
  );
};

export default Input;
