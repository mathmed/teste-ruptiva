import React from 'react';
import { StatusBar } from 'react-native';
import { ButtonText, Container, Title } from './styles';
import { Form } from '@unform/mobile';
import Input from '../../components/Input';
import Button from '../../components/Button';

const RegisterScreen: React.FC = () => {
  return (
    <Container>
      <StatusBar backgroundColor="#ff9000" />
      <Title>Submissão de cadastro</Title>
      <Form onSubmit={() => {}}>
        <Input name="name" placeholder="Nome" />
        <Input name="document" placeholder="Documento (CPF/CNPJ)" />
        <Button activeOpacity={0.8} onPress={() => alert('a')}>
          <ButtonText>ENVIAR</ButtonText>
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterScreen;
