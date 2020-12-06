import React, { useCallback, useState } from 'react';
import { FlatList, ModalProps, RefreshControl, Text } from 'react-native';
import { connect } from 'react-redux';
import getUsers from '../../core/redux/actions/getUsers';
import deleteUser from '../../core/redux/actions/deleteUser';
import {
  UsersState,
  GetUsersAction,
  DeleteUsersAction,
  UserData,
} from '../../core/redux/store/types';
import Button from '../Button';
import {
  Container,
  Content,
  DataContent,
  Title,
  CloseModalContent,
  TextCloseModal,
  ContainerUserInfo,
  UserInfoContent,
  Name,
  DocumentType,
  DeleteContent,
} from './styles';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { ConfirmDialog } from 'react-native-simple-dialogs';
import documentMask from '../../utils/documentMask';

interface CustomModalProps
  extends ModalProps,
    Omit<UsersState, 'loadingRegisterRequest'>,
    GetUsersAction,
    DeleteUsersAction {
  setVisibleModal: (visible: boolean) => void;
}

const Modal: React.FC<CustomModalProps> = ({
  loadingGetUsersRequest,
  users,
  setVisibleModal,
  getUsers,
  deleteUser,
  ...props
}) => {
  const [visibleConfirmDialogm, setVisibleConfirmDialog] = useState(false);
  const [userToDelete, setUserToDelete] = useState<string | null>(null);

  const handleGetUsers = useCallback(async () => {
    getUsers();
  }, []);

  const handleDeleteUser = useCallback((id: string) => {
    setUserToDelete(id);
    setVisibleConfirmDialog(true);
  }, []);

  const renderUsersData = useCallback(
    ({ name, document, type, id }: UserData) => (
      <ContainerUserInfo>
        <UserInfoContent>
          <Name>{name}</Name>
          <Text>{documentMask(document, type)}</Text>
          <DocumentType>{type === 'individual' ? 'CPF' : 'CNPJ'}</DocumentType>
        </UserInfoContent>
        <DeleteContent onPress={() => handleDeleteUser(id)}>
          <Icon name="trash-alt" color="#c53030" size={26} />
        </DeleteContent>
      </ContainerUserInfo>
    ),
    [],
  );

  return (
    <Container
      presentationStyle="overFullScreen"
      onRequestClose={() => setVisibleModal(false)}
      transparent={false}
      animationType="slide"
      visible={false}
      {...props}
    >
      <Content>
        <ConfirmDialog
          title="Atenção"
          message="Quer realmente deletar esse registro?"
          visible={visibleConfirmDialogm}
          onTouchOutside={() => setVisibleConfirmDialog(false)}
          positiveButton={{
            title: 'Sim',
            onPress: () => {
              if (userToDelete) {
                deleteUser(userToDelete);
                handleGetUsers();
                setVisibleConfirmDialog(false);
              }
            },
          }}
          negativeButton={{
            title: 'Não',
            onPress: () => setVisibleConfirmDialog(false),
          }}
        />
        <Title>Cadastros</Title>
        <DataContent>
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={loadingGetUsersRequest}
                onRefresh={handleGetUsers}
                progressBackgroundColor={'#ff9000'}
                colors={['#fff']}
              />
            }
            keyExtractor={(item) => item.id || item.document}
            data={users}
            renderItem={({ item }) =>
              renderUsersData({
                name: item.name,
                document: item.document,
                type: item.type,
                id: item.id,
              })
            }
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
};

export default connect(() => ({}), { getUsers, deleteUser })(Modal);
