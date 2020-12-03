import React, { useRef, useCallback } from 'react';
import { StatusBar, Text } from 'react-native';
import { ButtonText, Container, Title } from './styles';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as yup from 'yup';
import Input from '../../components/Input';
import Button from '../../components/Button';
import errorsValidator from '../../utils/errorsValidator';

const RegisterScreen: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: any) => {
    try {
      formRef.current?.setErrors({});
      const schema = yup.object().shape({
        name: yup.string().min(6, 'Nome obrigatório'),
        document: yup.string().min(14, 'Documento obrigatório'),
      });
      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      const errors = errorsValidator(error);
      formRef.current?.setErrors(errors);
    }
  }, []);
  return (
    <Container>
      <StatusBar backgroundColor="#ff9000" />
      <Title>Submissão de cadastro</Title>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome" />
        <Input name="document" placeholder="Documento (CPF/CNPJ)" />
        <Button
          onPress={() => formRef.current?.submitForm()}
          activeOpacity={0.8}
        >
          <ButtonText>ENVIAR</ButtonText>
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterScreen;
