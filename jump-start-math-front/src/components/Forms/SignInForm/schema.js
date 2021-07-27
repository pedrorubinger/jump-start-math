import * as Yup from 'yup';

const signInSchema = Yup.object().shape({
  email: Yup.string()
    .required('Insira seu email!')
    .email('Você deve inserir um email válido!'),
  password: Yup.string().required('Você deve inserir sua senha!')
});

export default signInSchema;
