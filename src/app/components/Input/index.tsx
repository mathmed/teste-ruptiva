import React, { useState, useCallback } from 'react';
import { TextInputProps } from 'react-native';
import { Container, Fillable } from './styles';

interface CustomInputProps extends TextInputProps {
  name: string;
}

const Input: React.FC<CustomInputProps> = ({ ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container isFocused={isFocused}>
      <Fillable
        isFocused={isFocused}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...props}
      />
    </Container>
  );
};

export default Input;
