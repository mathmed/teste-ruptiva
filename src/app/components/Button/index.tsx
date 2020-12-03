import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container } from './styles';

type CustomButtonProps = TouchableOpacityProps;

const Button: React.FC<CustomButtonProps> = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);

export default Button;
