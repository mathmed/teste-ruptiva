import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  border: 3px solid #232129;
  color: #636360;
  margin-top: 14px;
  ${(props) =>
    props.isFocused &&
    css`
      border-color: #ff9000;
    `}
`;

export const Fillable = styled.TextInput<ContainerProps>`
  padding: 16px;
  font-size: 18px;
  border: 0;
  background: transparent;
  color: #f4ede8;
  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
    `}
  &::placeholder {
    color: #636360;
  }
`;
