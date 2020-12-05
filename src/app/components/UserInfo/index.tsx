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

interface UserInfoProps {
  name: string;
  document: string;
  type: string;
}

const UserInfo: React.FC<UserInfoProps> = ({
  name,
  document,
  type,
}: UserInfoProps) => (
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
