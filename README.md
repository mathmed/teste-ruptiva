# Teste Ruptiva

## Bibliotecas utilizadas
- firebase
- react-native-masked-text
- react-native-simple-dialogs
- react-redux
- redux
- redux-thunk
- styled-components
- yup
- unform

## Dependências
- expo
- yarn || npm

## Rodando o projeto local

### Configurando o Firebase
Para rodar o projeto é necessário configurar as credenciais do Firebase, para isso, crie um projeto no mesmo e coloque as credenciais em
```src/config/firebase/credentials.json```
Caso queira utilizar minhas credenciais, posso enviar por e-mail.


### Rodando o projeto

Para rodar o projeto localmente faça o clone do repositório

``` $ git clone https://github.com/mathmed/teste-ruptiva.git ```

Instale as dependências

```$ yarn install ``` ou ```$ npm i --save ```

Inicie o projeto

```$ yarn start ``` ou ```$ npm start ```

Utilize um celular com o aplicativo Expo instalado para escanear o QR mostrado no terminal.



## Testes
Para rodar os testes utilize o comando
```$ yarn test ``` ou ```$ npm test ```

Para visualizar a cobertura de testes adicione a flag ```--coverage```


## Processo de desenvolvimento
O processo de desenvolvimento no geral foi tranquilo, a maioria das bibliotecas utilizadas neste projeto já tinham sido utilizadas antes por mim. Tentei utilizar alguns conceitos apresentados no Styleguide de vocês. Alguns problemas/dificuldades encontradas no geral:

**Snack:** Não consegui utilizar a ferramenta snack para "hospedar" a aplicação, ao tentar realizar a importação do Github encontrei alguns erros, a mesma coisa ao tentar importar os arquivos manualmente a partir do computador.

**Integração do unform com a react-native-masked-text:** Encontrei um pouco de dificuldade para fazer a integração das duas libs utilizando Typescript, e esta dificuldade se extendeu para os testes, infelizmente não consegui testar o component **Input** por conta de um erro advindo da biblioteca **unform**.

**Expo:** Passei por algumas dificuldades com o Expo que retardaram o desenvolvimento, problemas como desconexão do dispositivo, incompatibilidade com bibliotecas, problemas nos testes e afins.

**Tipagem do Redux:** Já utilizei Redux em muitos projetos, entretanto, poucos foram utilizando Typescript. Por conta disso, tive e ainda tenho alguma dificuldade em acompanhar as tipagens da biblioteca, e a documentação do mesmo não é tão clara nesse ponto.

