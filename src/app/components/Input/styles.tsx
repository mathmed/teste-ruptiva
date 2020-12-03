import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean;
  isFilled?: boolean;
  hasError?: boolean;
}

export const Container = styled.View<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  border: 3px solid #232129;
  color: #636360;
  margin-top: 14px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${(props) =>
    props.hasError &&
    css`
      border-color: #c53030;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      border-color: #ff9000;
    `};
`;

export const Fillable = styled.TextInput<ContainerProps>`
  background: transparent;
  padding: 16px;
  font-size: 18px;
  border: 0px transparent;
  color: #f4ede8;
  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}
  &::placeholder {
    color: #636360;
  }
`;

export const ErrorIconContainer = styled.View`
  margin-right: 16px;
`;

export const ErrorMessage = styled.Text`
  color: #c53030;
  margin-top: 8px;
`;
