import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  name: Yup.string().required('Preencha seu nome!'),
  email: Yup.string()
    .required('Preencha seu email!')
    .email('Você deve fornecer um email válido!'),
  school: Yup.string(),
  message: Yup.string()
    .required('Você deve escrever uma mensagem!')
    .max(5000, 'A mensagem não pode ultrapassar 5000 caracteres!')
});

export default contactSchema;
