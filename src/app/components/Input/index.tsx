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
  rawValue?: string;
}

const Input: React.FC<CustomInputProps> = ({
  name,
  onChangeText,
  rawValue,
  ...props
}) => {
  const inputRef = useRef<CustomInputProps>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleOnChange = useCallback(
    (text) => {
      if (inputRef.current) inputRef.current.value = text;
      if (onChangeText) onChangeText(text);
    },
    [onChangeText],
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = defaultValue;
    }
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      clearValue(ref) {
        handleOnChange('');
        ref.value = '';
        ref.clear();
      },
      getValue(ref) {
        return rawValue || ref.value;
      },
    });
  }, [fieldName, rawValue, registerField]);

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
          ref={inputRef}
          isFocused={isFocused}
          isFilled={isFilled}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          onChangeText={handleOnChange}
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
