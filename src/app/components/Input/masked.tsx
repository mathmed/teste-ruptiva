import React, { useState, useCallback, useRef } from 'react';
import { TextInputMask, TextInputMaskProps } from 'react-native-masked-text';
import Input from './index';

interface CustomInputProps extends TextInputMaskProps {
  name: string;
  ref?: any;
}

const InputMask: React.FC<CustomInputProps> = ({ type, ...props }) => {
  const inputRef = useRef<CustomInputProps>(null);
  const [value, setValue] = useState('');
  const [rawValue, setRawValue] = useState('');

  const handleOnChangeText = useCallback((maskedValue, unmaskedValue) => {
    setValue(maskedValue);
    setRawValue(unmaskedValue);
  }, []);

  return (
    <TextInputMask
      ref={inputRef}
      type={type}
      includeRawValueInChangeText
      value={value}
      onChangeText={handleOnChangeText}
      customTextInput={Input}
      customTextInputProps={{
        rawValue,
        ...props,
      }}
      {...props}
    />
  );
};
export default InputMask;
