import React, { useRef, useCallback, useState } from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import {
  ButtonText,
  Container,
  DocumentContainer,
  DocumentText,
  TextTypeDocument,
  Title,
  DocumentOptionsContainer,
  TextOpenModal,
} from './styles';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { connect } from 'react-redux';
import * as yup from 'yup';
import Input from '../../components/Input';
import InputMasked from '../../components/Input/masked';
import Button from '../../components/Button';
import UsersInfo from '../UsersInfo';
import errorsValidator from '../../utils/errorsValidator';
import register from '../../core/redux/actions/register';
import { UsersState, RegisterAction } from '../../core/redux/store/types';
import Loading from '../../components/Loading';
import md5 from 'md5';

interface RegisterForm {
  name: string;
  document: string;
}

type RegisterScreenProps = UsersState & RegisterAction;

const RegisterScreen: React.FC<RegisterScreenProps> = ({
  loadingRegisterRequest,
  loadingGetUsersRequest,
  users,
  register,
}: RegisterScreenProps) => {
  const [typeDocument, setTypeDocument] = useState('individual');
  const [visibleModal, setVisibleModal] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const handleChangeTypeDocument = useCallback((typeDocument: string) => {
    setTypeDocument(typeDocument);
    formRef.current?.reset();
  }, []);

  const handleSubmit = useCallback(async (data: RegisterForm, { reset }) => {
    try {
      formRef.current?.setErrors({});
      const schema = yup.object().shape({
        name: yup
          .string()
          .required('Campo obrigatório')
          .min(4, 'Campo obrigatório'),
        document: yup
          .string()
          .required('Documento obrigatório')
          .min(
            typeDocument === 'individual' ? 11 : 14,
            'Documento obrigatório',
          ),
      });
      await schema.validate(data, { abortEarly: false });
      await register({
        id: md5(data.document),
        name: data.name,
        document: data.document,
        type: typeDocument,
      });
      reset();
    } catch (error) {
      const errors = errorsValidator(error);
      formRef.current?.setErrors(errors);
    }
  }, []);
  return (
    <Container>
      <StatusBar backgroundColor="#ff9000" />
      <UsersInfo
        users={users}
        loadingGetUsersRequest={loadingGetUsersRequest}
        setVisibleModal={setVisibleModal}
        visible={visibleModal}
      />
      <Title>Submissão de dados</Title>
      <DocumentContainer>
        <TextTypeDocument>TIPO DE DOCUMENTO</TextTypeDocument>
        <DocumentOptionsContainer>
          <TouchableOpacity
            onPress={() => handleChangeTypeDocument('individual')}
          >
            <DocumentText isSelected={typeDocument === 'individual'}>
              CPF
            </DocumentText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleChangeTypeDocument('business')}
          >
            <DocumentText isSelected={typeDocument === 'business'}>
              CNPJ
            </DocumentText>
          </TouchableOpacity>
        </DocumentOptionsContainer>
      </DocumentContainer>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="name"
          placeholder={typeDocument === 'individual' ? 'Nome' : 'Razão Social'}
        />
        <InputMasked
          type={typeDocument === 'individual' ? 'cpf' : 'cnpj'}
          name="document"
          placeholder={
            typeDocument === 'individual'
              ? '123.456.789-10'
              : '12.345.678/91234-56'
          }
        />
        {!loadingRegisterRequest ? (
          <Button
            onPress={() => formRef.current?.submitForm()}
            activeOpacity={0.8}
          >
            <ButtonText>ENVIAR</ButtonText>
          </Button>
        ) : (
          <Loading text="Enviando"></Loading>
        )}
      </Form>
      <TouchableOpacity onPress={() => setVisibleModal(true)}>
        <TextOpenModal>Ver cadastros</TextOpenModal>
      </TouchableOpacity>
    </Container>
  );
};

const mapStateToProps = ({ users }: { users: UsersState }) => ({
  loadingRegisterRequest: users.loadingRegisterRequest,
  loadingGetUsersRequest: users.loadingGetUsersRequest,
  users: users.users,
});

export default connect(mapStateToProps, { register })(RegisterScreen);
