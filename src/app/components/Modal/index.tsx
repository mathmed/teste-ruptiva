import React from 'react';
import { FlatList, ModalProps, Text, TouchableOpacity } from 'react-native';
import Button from '../Button';
import UserInfo from '../UserInfo';
import {
  Container,
  Content,
  DataContent,
  Title,
  CloseModalContent,
  TextCloseModal,
} from './styles';

interface CustomModalProps extends ModalProps {
  setVisibleModal: (visible: boolean) => void;
}

const Modal: React.FC<CustomModalProps> = ({
  setVisibleModal,
  children,
  ...props
}) => (
  <Container
    presentationStyle="overFullScreen"
    transparent={false}
    animationType="slide"
    visible={false}
    {...props}
  >
    <Content>
      <Title>Cadastros</Title>
      <DataContent>
        <FlatList
          keyExtractor={(item) => item.document}
          data={[
            {
              name: 'Mateus Medeiros',
              document: '412.453.178-81',
              type: 'individual',
            },
            {
              name: 'Pedro Silva',
              document: '12.345.678/91234-56',
              type: 'business',
            },
          ]}
          renderItem={({ item }) => (
            <UserInfo
              name={item.name}
              document={item.document}
              type={item.type}
            />
          )}
        />
      </DataContent>
      <CloseModalContent>
        <Button activeOpacity={0.8} onPress={() => setVisibleModal(false)}>
          <TextCloseModal>FECHAR</TextCloseModal>
        </Button>
      </CloseModalContent>
    </Content>
  </Container>
);

export default Modal;
