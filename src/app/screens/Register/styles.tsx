import styled, { css } from 'styled-components/native';

interface DocumentProps {
  isSelected: boolean;
}

export const Container = styled.SafeAreaView`
  background: #312e38;
  flex: 1;
  padding: 0 20px;
  display: flex;
  padding-top: 20%;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #312e38;
`;

export const DocumentContainer = styled.View`
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;

export const DocumentOptionsContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding: 6px;
`;

export const DocumentText = styled.Text<DocumentProps>`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  margin: 0 10px;
  padding: 4px;
  ${(props) =>
    props.isSelected &&
    css`
      color: #312e38;
      background: #ff9000;
      border-radius: 6px;
    `};
`;

export const TextTypeDocument = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px; ;
`;

export const TextOpenModal = styled(TextTypeDocument)`
  text-align: center;
  margin-top: 14px;
  font-size: 20px;
`;
