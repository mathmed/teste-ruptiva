import styled from 'styled-components/native';

export const Container = styled.Modal``;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-size: 24px;
  padding-top: 10%;
`;

export const TextCloseModal = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #312e38;
`;

export const Content = styled.View`
  position: relative;
  display: flex;
  height: 100%;
`;

export const DataContent = styled.View`
  margin: 20px;
  flex: 1;
`;
export const CloseModalContent = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ContainerUserInfo = styled.View`
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
