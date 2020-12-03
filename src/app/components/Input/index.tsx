import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import { TextInputProps } from 'react-native';
import {
  Container,
  ErrorIconContainer,
  ErrorMessage,
  Fillable,
} from './styles';

import { FontAwesome5 as Icon } from '@expo/vector-icons';

interface CustomInputProps extends TextInputProps {
  name: string;
}

const Input: React.FC<CustomInputProps> = ({ name, ...props }) => {
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <>
      <Container isFocused={isFocused} hasError={!!error}>
        <Fillable
          isFocused={isFocused}
          isFilled={isFilled}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...props}
        />
        {error && (
          <ErrorIconContainer>
            <Icon name="info-circle" color="#c53030" size={20} />
          </ErrorIconContainer>
        )}
      </Container>
      <ErrorMessage>{error}</ErrorMessage>
    </>
  );
};

export default Input;
