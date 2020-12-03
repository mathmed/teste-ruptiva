interface RegisterActionData {
  name: string;
  document: string;
  type: string;
}

const registerAction = ({ name, document, type }: RegisterActionData): void => {
  console.log(name, document, type);
};

export default registerAction;
