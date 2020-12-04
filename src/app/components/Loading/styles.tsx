import styled from 'styled-components/native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

export const Container = styled.View`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingText = styled.Text`
  color: #ff9000;
  font-weight: bold;
  margin-top: 16px;
  font-size: 16px;
`;

export const LoadingIcon = styled(Icon)`
  transform: rotate(45deg);
`;
