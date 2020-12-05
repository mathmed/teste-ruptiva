import styled from 'styled-components/native';

export const Container = styled.View`
  background: #312e38;
  margin: 6px 0;
  padding: 20px;
  border-radius: 6px;
  flex-direction: row;
`;

export const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const DocumentType = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 6px;
  color: #ff9000;
`;

export const UserInfoContent = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
`;
export const DeleteContent = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
