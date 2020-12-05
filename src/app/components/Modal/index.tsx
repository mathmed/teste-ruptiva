import React, { useCallback } from 'react';
import { FlatList, ModalProps, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import getUsers from '../../core/redux/actions/getUsers';
import { GetUsersAction, UsersState } from '../../core/redux/store/types';
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

interface CustomModalProps extends ModalProps, GetUsersAction, UsersState {
  setVisibleModal: (visible: boolean) => void;
}

const Modal: React.FC<CustomModalProps> = ({
  loadingGetUsersRequest,
  users,
  setVisibleModal,
  getUsers,
  ...props
}) => {
  const handleGetUsers = useCallback(async () => {
    getUsers();
  }, []);

  return (
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
            refreshControl={
              <RefreshControl
                refreshing={loadingGetUsersRequest}
                onRefresh={handleGetUsers}
                progressBackgroundColor={'#ff9000'}
                colors={['#fff']}
              />
            }
            keyExtractor={(item) => item.document}
            data={users}
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
};

const mapStateToProps = ({ users }: { users: UsersState }) => ({
  loadingGetUsersRequest: users.loadingGetUsersRequest,
  users: users.users,
});

export default connect(mapStateToProps, { getUsers })(Modal);
