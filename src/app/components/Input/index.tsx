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
  const inputRef = useRef<CustomInputProps>(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

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
        ref.value = '';
        ref.clear();
      },
      setValue(ref, value: string) {
        ref.setNativeProps({ text: value });
        if (inputRef.current) {
          inputRef.current.value = value;
        }
      },
      getValue(ref) {
        return ref.value;
      },
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
          {...props}
          ref={inputRef}
          isFocused={isFocused}
          isFilled={isFilled}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          onChangeText={(value) => {
            if (inputRef.current) {
              inputRef.current.value = value;
            }
          }}
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
