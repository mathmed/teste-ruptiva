import styled from 'styled-components/native';

export const Container = styled.Modal``;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-size: 24px;
  margin-top: 20px;
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
