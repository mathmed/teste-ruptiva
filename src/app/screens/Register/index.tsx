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
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import errorsValidator from '../../utils/errorsValidator';
import register from '../../core/redux/actions/register';
import { RegisterAction, RegisterState } from '../../core/redux/store/types';
import Loading from '../../components/Loading';

interface RegisterForm {
  name: string;
  document: string;
}
type RegisterScreenProps = RegisterState & RegisterAction;

const RegisterScreen: React.FC<RegisterScreenProps> = ({
  loadingRegisterRequest,
  register,
}: RegisterScreenProps) => {
  const [typeDocument, setTypeDocument] = useState('individual');
  const [visibleModal, setVisibleModal] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: RegisterForm, { reset }) => {
    try {
      console.log(data);
      formRef.current?.setErrors({});
      const schema = yup.object().shape({
        name: yup
          .string()
          .required('Campo obrigatório')
          .min(6, 'Campo obrigatório'),
        document: yup
          .string()
          .required('Documento obrigatório')
          .min(14, 'Documento obrigatório'),
      });
      await schema.validate(data, { abortEarly: false });
      await register({
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
      <Modal setVisibleModal={setVisibleModal} visible={visibleModal}>
        <Title>eae</Title>
      </Modal>

      <Title>Submissão de dados</Title>
      <DocumentContainer>
        <TextTypeDocument>DOCUMENTO</TextTypeDocument>
        <DocumentOptionsContainer>
          <TouchableOpacity onPress={() => setTypeDocument('individual')}>
            <DocumentText isSelected={typeDocument === 'individual'}>
              CPF
            </DocumentText>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTypeDocument('business')}>
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
        <Input
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

const mapStateToProps = ({ register }: { register: RegisterState }) => ({
  loadingRegisterRequest: register.loadingRegisterRequest,
});

export default connect(mapStateToProps, { register })(RegisterScreen);
