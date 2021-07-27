import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Yup from 'yup';

import { StyledError } from '../../components/UI/Input/styles.js';
import { Container, FormContainer } from './styles.js';
import { signInClass } from '../../services/requests/class-sign-in';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
import Label from '../../components/UI/Label';
import Toast from '../../components/UI/Toast';
import Titles from '../../components/UI/Titles';
import FormGroup from '../../components/UI/FormGroup/index.js';
import Header from '../../components/UI/Header/index.js';

const ClassSignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef();
  const { user } = useSelector((state) => state.User);
  const classSignInSchema = Yup.object().shape({
    class_code: Yup.string().required('Informe o código da turma!')
  });

  const onSubmit = async (values) => {
    setIsSubmitting(true);
    console.log('submitted:', values);

    try {
      await classSignInSchema.validate(values, { abortEarly: false });

      const userId = user?.id;
      const data = { classroom: values.class_code };
      const response = await signInClass(userId, data);

      console.log('response:', response);

      Toast().fire({
        icon: 'success',
        title: 'A sua matrícula foi efetuada!',
      });
      <Redirect to="/" />
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        setError(validationErrors.class_code);
      } else {
        Swal.fire({
          title: 'Erro!',
          text:
            'Desculpe, um erro aconteceu ao ingressar nesta turma. Por favor, tente novamente mais tarde ou contate-nos.',
          icon: 'error',
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  }
  
  return (
    <Container>
      <Header />
      <Titles titleName="Matrícula" />
        <FormContainer>
          <Form onSubmit={onSubmit} ref={formRef}>
            <div>
              <FormGroup>
                <Label htmlFor="classroom_code" required>Código da Turma</Label>
                <Input
                  type="text"
                  name="classroom_code"
                  id="classroom_code"
                  max="10"
                  maxWidth="10"
                  placeholder="Código da Turma"
                />
                {!!error && <StyledError>{error}</StyledError>}
              </FormGroup>
              <Button
                type="submit"
                className="w-100"
                title="Clique para matricular-se"
              >
                {isSubmitting ? 'Salvando...' : 'Matricular-se'}
              </Button>
            </div>
          </Form>
        </FormContainer>
    </Container>
  );
};

export default ClassSignIn;
