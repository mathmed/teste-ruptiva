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
  margin-bottom: 30px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #312e38;
`;

export const DocumentContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 30%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const DocumentText = styled.Text<DocumentProps>`
  color: #fff;
  font-weight: bold;
  font-size: 16px;

  ${(props) =>
    props.isSelected &&
    css`
      color: #ff9000;
    `}
`;

export const TextTypeDocument = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px; ;
`;
