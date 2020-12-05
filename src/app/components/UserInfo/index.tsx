import React from 'react';
import { Text } from 'react-native';
import {
  Container,
  Name,
  DocumentType,
  UserInfoContent,
  DeleteContent,
} from './styles';

import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { UserData } from '../../core/redux/store/types';

const UserInfo: React.FC<UserData> = ({ name, document, type }: UserData) => (
  <Container>
    <UserInfoContent>
      <Name>{name}</Name>
      <Text>{document}</Text>
      <DocumentType>{type === 'individual' ? 'CPF' : 'CNPJ'}</DocumentType>
    </UserInfoContent>
    <DeleteContent>
      <Icon name="trash-alt" color="#c53030" size={26} />
    </DeleteContent>
  </Container>
);

export default UserInfo;
