import * as Yup from 'yup';

const classroomSchema = Yup.object().shape({
  name: Yup.string().required('Preencha o nome da turma!'),
  code: Yup.string().required('Preencha o código da turma!'),
  description: Yup.string()
    .max(500, 'A descrição não pode ultrapassar 500 caracteres!')
});

export default classroomSchema;
